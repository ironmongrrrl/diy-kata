const fizzBuzz = number => {
    if (number % 15) {
        return 'FizzBuzz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else {
        return number;
    }
};


module.exports = fizzBuzz;
