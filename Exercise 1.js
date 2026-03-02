// Exercise 1: Create an array of numbers from 1 to 20 using a while loop and print it to the console.

// Initialize an empty array to store the numbers
const numbers = [] 

// Start the counter at 1
let counter = 1 

// Use a while loop to add numbers from 1 to 20 to the array
while (counter <= 20){
    numbers.push(counter)
    counter++
}

// Print the array of numbers to the console
console.log("Array of numbers from 1 to 20:", numbers)