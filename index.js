// Your code here
//mapToNegativize returns an array with all values made negative
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(-1 * src[i])
    }
    return r
}

//mapToNoChange returns an array with the original values
function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(src[i])
    }
    return r
}

//mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(2 * src[i])
    }
    return r
}

//mapToSquare returns an array with the original values squared
function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(src[i] * src[i])
    }
    return r
}

//reduceToTotal returns a running total when not given a starting point
function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++) {
        total += src[i]
    }
    return total
}

//reduceToAllTrue returns true when all values are truthy
function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false
    }
    return true
}

//reduceToAnyTrue returns true when a true value is present
function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true
    }
    return false
}