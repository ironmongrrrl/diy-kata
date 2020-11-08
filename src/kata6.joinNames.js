// Not necessary to use 'let' here as the variables are not getting values reassigned.

const joinNames = namesObj => {
    let array = namesObj.map(a => a.name);
    let newArray = array.slice(0, array.length - 1)
                        .join(', ');
    let lastWord = array.slice(array.length - 1, array.length); // Could use array index here to access the lastWord, like array[array.length - 1]
    return newArray + ' & ' + lastWord;
};
module.exports = joinNames;
