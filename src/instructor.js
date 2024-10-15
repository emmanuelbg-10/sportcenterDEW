class Instructor {
  #basicSalary
  ledActivities = []
  constructor (name, basicSalary = 500) {
    this.name = name
    this.#basicSalary = basicSalary
  }

  get salary () {
    return this.#basicSalary
  }

  lead (...activities) {
    activities.forEach(activity => {
      if (activity && activity.constructor.name === 'Activity') {
        // Solo agrega si no está ya liderada
        if (!this.ledActivities.includes(activity)) {
          this.ledActivities.push(activity) // Agrega la actividad al instructor
          activity.ledBy(this) // Asigna el instructor a la actividad
        }
      }
    })
  }
}

module.exports = Instructor
