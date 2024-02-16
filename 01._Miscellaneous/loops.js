// loop method
// forEach, map, filter, sort, find, reduce

// Use above methods to avoid "side effects" (changing variable values outside its local environment -- we only want to return values (?))

const dogs = [
    { name: "Lassie", fameLevel: 13 },
    { name: "Beethoven", fameLevel: 8 },
    { name: "Hachiko", fameLevel: 18 },
    { name: "Balto", fameLevel: 5 }
];

// Add a fame level of +3 for all dogs
dogs.forEach(dog => {
    dog.fameLevel += 3;
});

// Above is not preferred
// map is preferred for avoiding side effects. We don't change values outside the function itself
// Use this instead:

const updatedDogs = dogs.map(dog => {
    dog.fameLevel += 3;
    return dog;
});

console.log(updatedDogs);

// Map can handle multiple elements in parallel. Especially good for API calls that can take a while

// Task: Add the key "male" and value "true" except for Lassie

const genderDogs = dogs.map(dog => {
    dog.male = (dog.name === "Lassie" ? false : true);
    return dog;
});
console.log(genderDogs);


// Create a one-liner that doubles the numbers
const numbers = [1, 2, 3, 4, 5];

const updatedNumbers = numbers.map(x => x * 2);
console.log(updatedNumbers);

