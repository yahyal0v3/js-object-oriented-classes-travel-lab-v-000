
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
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return horizontalDistance + verticalDistance
  }

  estimatedTime() {
    return this.blocksTravelled() / 3
  }
}
