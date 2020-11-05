// For bonus points - how could this be extended to work with distance = 0 or speed = 0 edge cases?

const reachDestination = (distance, speed) => {
    let arrivalTime = Math.round((distance/speed)*2)/2;
    return `I should be there in ${arrivalTime} hours.`
};


module.exports = reachDestination;
