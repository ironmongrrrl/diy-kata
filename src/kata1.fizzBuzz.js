/*
The tests for fizzBuzz were not passing due to the first if statement condition not being complete.
Here I have encapsulated the conditions with a named variable, which makes it clearer what is expected from the first if statement.
 */

const fizzBuzz = number => {
    const isDivisibleBy3 = number % 3 === 0
    const isDivisibleBy5 = number % 5 === 0

    if (isDivisibleBy3 && isDivisibleBy5) {
        return 'FizzBuzz';
    } else if (isDivisibleBy5) {
        return 'Buzz';
    } else if (isDivisibleBy3) {
        return 'Fizz';
    } else {
        return number;
    }
};


module.exports = fizzBuzz;
