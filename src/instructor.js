const Activity = require('./activity')

class Instructor {
  #basicSalary
  constructor (name, basicSalary = 500) {
    this.name = name
    this.ledActivities = []
    this.#basicSalary = basicSalary
  }

  get salary () {
    let total = this.#basicSalary
    this.ledActivities.forEach(element => {
      total += element.assistance * 5 + 100
    })

    return total
  }

  lead (activity) {
    if (activity instanceof Activity) {
      this.ledActivities.push(activity)
      activity.ledBy(this)
    }
  }
}

module.exports = Instructor
