class Client {
  #age
  constructor (name, age = 50) {
    this.name = name
    if (age < 0) {
      this.#age = 50
    } else {
      this.#age = age
    }
  }

  get category () {
    let categoria
    if (this.#age < 22) {
      categoria = 'Promesa'
    } else if (this.#age >= 22 && this.#age <= 40) {
      categoria = 'Senior'
    } else {
      categoria = 'Veterano'
    }
    return categoria
  }

  get age () {
    return this.#age
  }

  turnedYearsOld () {
    this.#age++
  }

  set age (newAge) {
    if (newAge > 0) {
      this.#age = newAge
    }
  }
}

module.exports = Client
