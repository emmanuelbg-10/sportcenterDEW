class Service {
  ratings = []
  constructor (name) {
    this.name = name
  }

  giveRating (num) {
    this.ratings.push(num)
  }

  get rating () {
    if (this.ratings.length === 0) {
      return 0
    } else {
      let aux = 0
      this.ratings.forEach(element => {
        aux += element
      })
      return Number((aux / this.ratings.length).toFixed(2))
    }
  }
}

module.exports = Service
