'use strict'
const Alumno = use('App/Models/Alumno')
const { validate } = use('Validator')

class AlumnoController {
    async index({response}){
        const alumnos = await Alumno.all()

        response.status(200).json({
            message: 'Alumnos registrados.',
            data: alumnos
        })
    }

    async crear({request, response}){
        const rules = {
            email: 'required|email|unique:users,email',
            edad: 'required'
        }
        let dat = request.all()
        const validation = await validate(dat, rules)

        if (validation.fails()) {
            response.status(404).json({
                message: "Faltan datos, porfavor ingresa los datos faltantes",
                errores: validation.messages()
            })
        }else{
            const{nombre, email, edad} = request.post()
            const alumno = await Alumno.create({nombre, email, edad})
            response.status(201).json({
                message: "El Alumno ha sido registrado exitosamente :)",
                data: alumno
            })
        }
    }
    async mostrar({ response, params:{ id } }) {
        const alumno = await Alumno.find(id)

        if (alumno) {
            response.status(200).json({
                message: 'El alumno fue encontrado :)',
                data: alumno

            })
        }else{
            response.status(404).json({
                message: 'Lo sentimos el alumno no fue encontrado',
                id
            })
        }
    }

    async editar({ request, response, params:{ id } }) {
        const alumno = await Alumno.find(id)

        if (alumno) {
            const{nombre, email, edad} = request.post()

            alumno.nombre = nombre
            alumno.email = email
            alumno.edad=edad

            await alumno.save()

            response.status(200).json({
                message: 'El alumno ha sido modificado',
                data: alumno
            })
        }else{
            response.status(404).json({
                message: 'Lo sentimos pero el alumno no puede modificarse',
                id
            })
        }
    }
    
    async eliminar({ response, params: { id } }) {
        const alumno = await Alumno.find(id)

        if (alumno) {
            await alumno.delete()

            response.status(200).json({
                message: 'El alumno ha sido eliminado',
                id
            })
        }else{
            response.status(404).json({
                message: 'El alumno no se pudo eliminar ni pez',
                id
            })
        }
    }

}

module.exports = AlumnoController
