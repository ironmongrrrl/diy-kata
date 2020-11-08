// It is not necessary to use a 'let' here as the variable never gets reassigned a different value

const numberToReversedDigits = (number) => {
    let newNumber = number
        .toString()
        .split('')
        .reverse()
        return newNumber.map(Number); // Nice shorthand casting to Number!
};

module.exports = numberToReversedDigits;


