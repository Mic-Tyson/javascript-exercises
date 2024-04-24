const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    array.sort((p1, p2) =>  ((p2.yearOfDeath ? p2.yearOfDeath : currentYear) - p2.yearOfBirth) - ((p1.yearOfDeath ? p1.yearOfDeath : currentYear) - p1.yearOfBirth))
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
