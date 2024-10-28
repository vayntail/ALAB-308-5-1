// ================= PART 1: Thinking Functionally =================


function sum(arr) {
    // Takes an array of numbers and return the sum
    return arr.reduce((acc, value) => acc + value + 0);
}

function average(arr) {
    // Takes an array of numbers and return the average.
    return sum(arr) / arr.length;
}

function longestString(arr) {
    // takes an array of string and return the longest string
    return arr.sort((a,b) => b.length - a.length)[0]
}

function stringsLongerThan(arr, num) {
    // Takes an array of strings and a number and return array of the strings that are longer than the given number.
    return arr.filter(word => word.length > num);
}

function countTo(n) {
    // Takes a number, n, and print every number between 1 and n using recursion.
    // base case
    if (n == 1) {
        console.log(n);
        return;
    }
    else {
        // otherwise return new n;
        countTo(n - 1);
        console.log(n);
    }
}

// Test logs for part 1
let numArr = [1, 2, 3, 4];
console.log(sum(numArr))
console.log(average(numArr))
console.log(longestString(['say', 'hello', 'in', 'the', 'morning']))
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
console.log(countTo(5));


// ================= PART 2: Thinking Methodically =================
let dataArr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Sort the array by age
dataArr.sort((a, b) => a.age - b.age);

// Filter the array to remove entries with age greater than 50
dataArr = dataArr.filter(obj => obj.age < 50);

// Map the array to change occupation key to job and increment every age by 1
dataArr = dataArr.map((obj) => {
    obj["job"] = obj.occupation;
    delete obj.occupation;
    obj.age = (+obj.age + 1).toString();
    return obj;
})
console.log(dataArr);

// Use reduce method to calculate sum of ages
let sumOfAges = dataArr.reduce((accumulator, currentObj) => accumulator + +currentObj.age, 0);
console.log(sumOfAges) 

// Calculate average age 
let avgAge = sumOfAges / dataArr.length;
console.log(avgAge);
