// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName", () => {
//     it("", () => {
//         expect(functionName()).toEqual()
//     })
// })


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// describe a function called encrypter that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
describe("encrypter", () => {
    let secretCodeWord1 = "Lackadaisical"
    let expectedOutput1 = "L4ck4d41s1c4l"
    let secretCodeWord2 = "Gobbledygook"
    let expectedOutput2 = "G0bbl3dyg00k"
    let secretCodeWord3 = "Eccentric"
    let expectedOutput3 = "3cc3ntr1c"
    it("takes in a string and returns a coded message", () => {
        expect(encrypter(secretCodeWord1)).toEqual(expectedOutput1)
        expect(encrypter(secretCodeWord2)).toEqual(expectedOutput2)
        expect(encrypter(secretCodeWord3)).toEqual(expectedOutput3)
    })
})

// RED

// b) Create the function that makes the test pass.

// Create a function that takes in a string and uses .replace to change the values
const encrypter = (str) => {
    return str.replace(/[a]/gi, '4').replace(/[e]/gi, '3').replace(/[i]/gi, '1').replace(/[o]/gi, '0')
}

// GREEN

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe a function called doesContain that  takes in an array of words and a single letter and returns all the words that contain that particular letter.
describe("doesContain", () => {
    let arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    let letterA = "a"
    let expectedOutput1 = ["Apple", "Banana", "Orange"]
    let arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    let letterE = "e"
    let expectedOutput2 = ["Cherry", "Blueberry", "Peach"]
        it(" takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        expect(doesContain(arrayOfWords1, letterA)).toEqual(expectedOutput1)
        expect(doesContain(arrayOfWords2, letterE)).toEqual(expectedOutput2)
    })
})

// RED

// b) Create the function that makes the test pass.
// define doesContain with an input of an array and a single letter

const doesContain = (check, letter) => {
    let theseContain = []
    for (let j = 0; j < check.length; j++) {
        // if the word contains the letter in any case format, the original unmodified word is pushed onto the array and then later returned
        if (check[j].toLowerCase().includes(letter.toLowerCase())){
            theseContain.push(check[j])
        }
    }
    return theseContain
}

// GREEN

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// describe a function called fullHouse that takes in an array of 5 numbers and determines whether or not the array is a “full house”

describe("fullHouse", () => {
    let hand1 = [5, 5, 5, 3, 3]
    let expectedOutput1 = true
    let hand2 = [5, 5, 3, 3, 4]
    let expectedOutput2 = false
    let hand3 = [5, 5, 5, 5, 4]
    let expectedOutput3 = false
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(expectedOutput1)
        expect(fullHouse(hand2)).toEqual(expectedOutput2)
        expect(fullHouse(hand3)).toEqual(expectedOutput3)
    })
})

// RED

// b) Create the function that makes the test pass.

// create a function called fullHouse that takes in an array and determines if there is a full house
const fullHouse = (hand) => {
    // iterate through the array, and push values into three arrays based on whether they match or not
    // Start with this having the first value in the input array loaded into as a default to give the others a comparison start point
    let valueMatch1 = [hand[0]]
    // if either of these have a length of two and three then it is a full house
    let valueMatch2 = []
    // if this array is empty then there was only two unique values passed to the function
    let doesNotMatch = []
    for (let i = 1; i < hand.length; i++) {
        // if the value matches the value then put it into the array
        if (hand[i] === valueMatch1[0]) {
            valueMatch1 = [...valueMatch1, hand[i]]
        } else if (valueMatch2.length === 0) {
            valueMatch2 = [hand[i]]
        } else if (hand[i] === valueMatch2[0]) {
            valueMatch2 = [...valueMatch2, hand[i]]
        } else {
            doesNotMatch = [...doesNotMatch, hand[i]]
        }
    }
    // Now that we have placed our values into their matching arrays we determine if there is a full house. This is checked by having an empty doesNotMatch array, ie there are two or less different values passed into the function, and if valueMatch1 has either 2 or 3 items in it, which combined with an empty doesNotMatch array means valueMatch2 must have either 3 or 2 items in it, respectively, which satisfies the conditions of a full house.
    return (doesNotMatch.length === 0 && valueMatch1.length === (3 || 2)) ? 
        true : false
}

// GREEN