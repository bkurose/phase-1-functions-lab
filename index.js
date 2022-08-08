function distanceFromHqInBlocks(someValue) {
    if (someValue == 42){
        return "0"
    }
    else if (someValue > 42){
        return someValue - 42
    }
    else if (someValue < 42){
        return 42 - someValue
    }
  }

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
  }

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) > 2500)
        return 'cannot travel that far'
    else if (distanceTravelledInFeet(start, destination) > 2000)
        return 25
    else if (distanceTravelledInFeet(start, destination) > 400)
        return (distanceTravelledInFeet(start, destination) -400) * .02
    else
        return 0
  }