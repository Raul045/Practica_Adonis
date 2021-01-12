'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Alumno = use('App/Models/Alumno')

class EcontrarAlumno {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params:{ id } }, next) {
    const alumno = await Alumno.find(id)
    
    if (!alumno) {
      return response.status(404).json({
        message: 'El alumno no fue encontrado',
        id
      })
    }

    request.body.alumno = alumno

    await next()
  }
}

module.exports = EcontrarAlumno
