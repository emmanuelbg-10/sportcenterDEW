const Service = require('./service')
const Activity = require('./activity')
const Facility = require('./facility')
const Instructor = require('./instructor')
class SportCenter {
  #instructors
  #services
  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
    this.#instructors = []
    this.#services = []
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...newService) {
    newService.forEach(element => {
      if (element instanceof Service) {
        if (!(this.getServices().indexOf(element) >= 0)) {
          this.getServices().push(element)
        }
      }
    })
  }

  removeService (deleteService) {
    const index = this.getServices().indexOf(deleteService)
    if (index >= 0) {
      this.getServices().splice(index, 1)
    }
  }

  getActivities () {
    const array = []
    this.getServices().forEach(element => {
      if (element instanceof Activity) {
        array.push(element)
      }
    })
    return array
  }

  getFacilities () {
    const array = []
    this.getServices().forEach(element => {
      if (element instanceof Facility) {
        array.push(element)
      }
    })
    return array
  }

  orderServicesBy (order) {
    this.#services = this.getServices()
    if (order === 'rating') {
      this.getServices().sort((a, b) => a.rating - b.rating).reverse()
    }
    if (order === 'name') {
      this.getServices().sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  getInstructors () {
    return this.#instructors
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && this.#instructors.indexOf(instructor) === -1) {
      this.#instructors.push(instructor)
    }
  }

  removeInstructor (remove) {
    this.#instructors.splice(remove, 1)
  }

  listInstructorsActivities () {
    const array = []
    for (let i = 0; i < this.#instructors.length; i++) {
      const instructorName = this.#instructors[i].name
      const activities = this.#instructors[i].ledActivities.map(activity => activity.name)
      array.push([instructorName, ...activities])
    }
    return array
  }

  costServices () {
    let cost = 0
    this.#services.forEach(element => {
      cost += element.calculateCost()
    })
    return cost
  }

  costInstructors () {
    let cost = 0
    this.#instructors.forEach(element => {
      cost += element.salary
    })
    return cost
  }
}

module.exports = SportCenter
