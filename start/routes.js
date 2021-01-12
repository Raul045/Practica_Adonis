'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Rutas alumnos consultar
Route.get('Alumnos', 'AlumnoController.index')
Route.get('Alumno/:id', 'AlumnoController.mostrar').middleware(['EncontrarAlumno'])
//Ruta para crear 
Route.post('Registrar', 'AlumnoController.crear')

//Ruta para actulizar alumnos
Route.put('actualizar/:id', 'AlumnoController.editar').middleware(['EncontrarAlumno'])

//Ruta para eliminar
Route.delete('borrar/:id', 'AlumnoController.eliminar').middleware(['EncontrarAlumno'])