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

  ledBy (instructor) {
    this.#instructor = instructor
  }

  calculateCost () {
    return this.fixedCost + (this.variableCost * this.assistance)
  }
}

module.exports = Activity
