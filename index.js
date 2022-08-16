// Code your solution in this file!
function distanceFromHqInBlocks(someNumber) {

    if (someNumber >= 42) {
      return someNumber - 42
    }
  
    else {
        return 42 - someNumber
    }
  
  }
  
  function distanceFromHqInFeet(someNumber) {
    return distanceFromHqInBlocks(someNumber) * 264
  }
  
  function distanceTravelledInFeet(begin, end) {
  
    if (begin >= 1 && end > begin) {
      return (end - begin) *264
    }
    else if (end < begin) {
      return (begin - end) *264
    }
  }
  
  function calculatesFarePrice(begin, end) {
    
    if (distanceTravelledInFeet(begin, end) < 400) {
      return 0
  
    }
  
    else if (distanceTravelledInFeet(begin, end) > 400 && distanceTravelledInFeet(begin, end) <= 2000) {
      return (distanceTravelledInFeet(begin, end) - 400) * 0.02
    }
  
    else if (distanceTravelledInFeet(begin, end) > 2500) {
      return 'cannot travel that far'
    }
  
    else if (distanceTravelledInFeet(begin, end) > 2000) {
      return 25
    }
    
  }