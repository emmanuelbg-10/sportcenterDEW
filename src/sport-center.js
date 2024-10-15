const Service = require('./service')
const Activity = require('./activity')
const Facility = require('./facility')
class SportCenter {
  #services = []
  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
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
}

module.exports = SportCenter
