const Service = require('./service')

class Activity extends Service {
  #instructor = null

  constructor (name, fixedCost = 0, variableCost = 0, assistance = 0) {
    super(name)
    this.fixedCost = fixedCost
    this.variableCost = variableCost
    this.assistance = assistance
  }

  get instructor () {
    return this.#instructor
  }

  // Verificar si el argumento tiene una propiedad 'ledActivities'
  ledBy (elInstructor) {
    if (elInstructor && 'ledActivities' in elInstructor) {
      // Evitar reasignar el mismo instructor si ya está asignado
      if (this.#instructor !== elInstructor) {
        this.#instructor = elInstructor
        if (!elInstructor.ledActivities.includes(this)) {
          elInstructor.lead(this) // Agrega esta actividad al instructor
        }
      }
    }
  }

  calculateCost () {
    return this.fixedCost + (this.variableCost * this.assistance)
  }
}

module.exports = Activity
