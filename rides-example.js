let ridesArray = ["Despicable Me Minion Mayhem,Simulator,4,20,30", "Hollywood Rip Ride Rockit,Coaster,5,12,50"]

let rideString = ridesArray[0]

// let data = ["a b,c,3", "d"]

console.log(makeArray(rideString))

// create operable rideArray from rideString 
function makeArray(rideString) {
    let rideArray = rideString.split(",")
    for (let i = 0; i < rideArray.length; i++) {
        if (i >= 2) {
            rideArray[i] = parseInt(rideArray[i])
        } else {
            rideArray[i] = rideArray[i]
        }
    }
    return rideArray
}

let rideArray = ['Despicable Me Minion Mayhem', 'Simulator', 4, 20, 30]

console.log(calcWaitTime(rideArray))

// calculate wait time per array element
function calcWaitTime(rideArray) {
    let lineLength = rideArray[4]
    let seats = rideArray[3]
    let duration = rideArray[2]
    let waitTime = Math.floor(lineLength / seats * duration) 
    return waitTime
}