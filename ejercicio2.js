/* Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10 */

const numbers =[1,2,3,4,5];


const doubleNumberConverter = (numberList) => {
    const conversion = numberList.map((number) => number*2 );
    console.log(conversion);
}

doubleNumberConverter(numbers);