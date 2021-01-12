'use strict'

/*
|--------------------------------------------------------------------------
| AlumnoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Alumnoss = use('App/Models/Alumno')

class AlumnoSeeder {
  async run () {
    const Alumnos = await Database.table('alumnos')
    console.log(Alumnos)


    const Alumno = await Factory.model('App/Models/Alumno').createMany(10)
  }
}

module.exports = AlumnoSeeder
