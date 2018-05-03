
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    horizontalDistance = this.beginningLocation.horizontal - this.endingLocation.horizontal
    verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical
    return horizontalDistance + verticalDistance
  }
}
