function distanceFromHqInBlocks(someValue) {
        let blocks = 42 - someValue
        return Math.abs(blocks)
}

function distanceFromHqInFeet(someValue) {
    
    return distanceFromHqInBlocks(someValue) * 264
    
}

function distanceTravelledInFeet(start, dest) {
    return 264 * (Math.abs(start - dest))
}

function calculatesFarePrice(start, dest) {
    let total = 264 * (Math.abs(start - dest))
    if (total < 400) {
        return 0
    } else if (total >= 400 && total <= 2000) {
        return .02 * (total - 400)
    } else if (total > 2000 && total <= 2500 ) {
        return 25
    } else {
        return "cannot travel that far"
    }
}
