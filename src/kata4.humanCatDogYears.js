// For bonus points - how could this be extended to work with non-integer years, like 1.5?

const humanCatDogYears = number => {
    if (number === 1) {
        let catYears = 15;
        let dogYears = 15;
        return [number, catYears, dogYears];
    } else if (number === 2) {
        catYears = 24;
        dogYears = 24;
        return [number, catYears, dogYears];
    } else if (number >= 3) {
        let newNumber = number - 2; 
        catYears = (newNumber * 4) + 24;  
        dogYears = (newNumber * 5) + 24;
        return [number, catYears, dogYears];
    }
};

module.exports = humanCatDogYears;


