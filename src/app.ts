// tsc command to COMPILE our ts in javascript not to run ^^
// we can also installed typescript ts-node and nodemon as dev dependencies
// ts-node is required with nodemon to watch ts files changes
// we can also install @types/node and @types/express to get their specific types as dev dependencies


// "scripts": {
//     // tsc to build ts to js and we specefic the path ./dist in tsconfig.json 
//     "build": "tsc -p .",
//     "start": "node dist/app.js",
//     "dev": "nodemon src/app.ts"
//   }
console.log("Hello World");

//degree of an array
// get the smallest subarray with the same degree (degree is max occurence of item)
const getSmallestSubarrayWithSameDegree = (numbers: number[]): number[] => {
    // check utility type like Record, Omit ...
    // https://www.typescriptlang.org/docs/handbook/utility-types.html
    let occurences: Record<number, number> = {};
    numbers.forEach(element => occurences[element] ? occurences[element] = occurences[element] + 1 : occurences[element] = 1);
    let degree: number = 0;
    let elementWithMaxDegree = numbers[0];
    // @ts-ignore
    (Object.keys(occurences) as unknown as keyof typeof occurences).forEach((key: keyof typeof occurences) => {
        if (occurences[key] > degree) {
            degree = occurences[key];
            elementWithMaxDegree = Number(key);
        }
    })
    console.log("elementWithMaxDegree", elementWithMaxDegree);
    console.log("Degree: is " + degree);
    let firstOccurence: number = numbers.indexOf(elementWithMaxDegree);
    let lastOccurence: number = numbers.lastIndexOf(elementWithMaxDegree);
    return numbers.slice(firstOccurence, lastOccurence + 1);

}

console.log("getSmallestSubarrayWithSameDegree([1, 2, 2, 3, 1, 4, 2])", getSmallestSubarrayWithSameDegree([1, 2, 2, 3, 1, 4, 2]));

// Sum pair number 16h:05  => 16h:11
function getPairSum(number: number): number {
    return String(number).split("").map(item => Number(item)).reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);
}
console.log("getPairSum(1672)", getPairSum(1672));


// 12min
// calculate occurrence number and show a this form aabbbaa => 2a3b2a
const encode = (plainText: string): string => {
    let result = "";
    let occurrence = 0
    plainText.split("").forEach((item, index) => {
        if (item != plainText[index + 1]) {
            occurrence++
            result += String(occurrence) + item
            occurrence = 0
        }
        else {
            occurrence++
        }
    })

    return result;

}

console.log("encode", encode("aabbbaa"));


// Join Point the number where s1===s2 
// if we didn't find the join we continue looking s1 = sum of element + s2
// s2=sum of element + s1
const computeJoinPoint = (s1: number, s2: number): string => {
    if (!(0 < s1 && s1 < 2000000) || !(0 < s2 && s2 < 2000000)) {
        return "";
    }
    if (s1 == s2) {
        if (s1 < 20000000) {
            return "joinPoint is: " + s1;
        } else {
            return "join point out of range";
        }
    }
    const callback = (accumulator: number, item: number) => accumulator + item;
    //let news1 = s1+ s1.toString().split('').map(Number).reduce(callback);
    let news1 = s1 + Array.from(String(s1), Number).reduce(callback);
    let news2 = s2 + Array.from(String(s2), Number).reduce(callback);
    return computeJoinPoint(news1, news2);

}
console.log(computeJoinPoint(471, 480));

// 9 min 
const closestToZero = (numbers: number[]): number => {
    let closest = Infinity
    closest = Math.min(...numbers.map(item => Math.abs(item)))
    if (numbers.find(elem => elem === (closest * -1))) {
        return closest * -1
    }
    return closest
}
console.log("closestToZero", closestToZero([4, 2, -2]));

//  find closest to specific temperature
const specific = 5


const closestToSpecificValue = (value: number, numbers: number[]): number => {
    const reducer = (acc: number, current: number) =>
        Math.abs(value - current) < Math.abs(acc - current) ? current : acc
    return numbers.reduce(reducer)
}
console.log(closestToSpecificValue(5, [1, 18, -4, 3]));


// algoTuring 2 8min
const countElements = (arr: number[]): number => {
    let count = 0
    arr.forEach(elem => arr.indexOf(elem + 1) !== -1 && count++)
    return count
}
console.log("countElements", countElements([1, 2, 3]));
console.log("countElements", countElements([1, 1, 3, 3, 5, 5]));
console.log("countElements", countElements([1, 3, 2, 3, 5, 0]));
console.log("countElements", countElements([1, 1, 2, 2]));
console.log("countElements", countElements([1, 1, 2]));

// algoTuring 3 10min
const twoSumLessThanK = (A: number[], K: number): number => {
    let maxSum = -1
    for (let i = 0; i < A.length; i++) {
        const elementI = A[i];
        for (let j = 1; j < A.length; j++) {
            const elementJ = A[j];
            if (elementI + elementJ < K && elementI + elementJ > maxSum) {
                maxSum = elementI + elementJ
            }
        }

    }
    return maxSum
}
console.log("twoSumLessThanK", twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
console.log("twoSumLessThanK", twoSumLessThanK([10, 20, 30], 15));

// algoTuring 4 40min
const findErrorsNums = (nums: number[]): [number, number] => {
    let missingElement = 0
    let error = 0
    nums.forEach((elem, index) => {
        let firstIndex = nums.indexOf(elem)
        let secondIndex = nums.indexOf(elem, firstIndex + 1)
        if (firstIndex !== -1 && secondIndex !== -1) {
            console.log("firstIndex", firstIndex);
            console.log("secondIndex", secondIndex);
            error = elem;
            if (nums[firstIndex + 1] === elem + 1 || nums[firstIndex - 1] === elem - 1) {
                missingElement = nums[secondIndex - 1] ? nums[secondIndex - 1] + 1 : nums[secondIndex + 1] - 1
            }
        }
    })
    return [error, missingElement]
}

console.log("findErrorsNums", findErrorsNums([1, 2, 3, 4, 3]));
console.log("findErrorsNums", findErrorsNums([1, 2, 2]));


// algoTuring 5 binary tree
// don't repeat this algo
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (node: any, level: number): number => {
    if (node === null) {
        return level
    }
    return Math.max(maxDepth(node.left, level + 1), maxDepth(node.right, level + 1))
}


// Tree traversal algorithms TO DO REPEAT THEM
// https://coderbyte.com/algorithm/tree-traversal-algorithms
class NodeElement {
    public left: any;
    public right: any;
    public data: any;
    constructor(data: string) {
        this.data = data;
        this.left = null
        this.right = null
    }
}

// create nodes
var root = new NodeElement('A');
var n1 = new NodeElement('B');
var n2 = new NodeElement('C');
var n3 = new NodeElement('D');
var n4 = new NodeElement('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;



//  FIFO this link solution is NOT CLEAR LOOK FOR OTHER SOLUTION 
// https://coderbyte.com/algorithm/implement-a-queue-using-linked-list 
//We will store a reference to the front and back of the queue in order to make enqueuing and dequeuing run in O(1) constant time.
//  Every time we want to insert into the queue, we add the new element to the end of the linked list and update the back pointer.
//When we want to dequeue we return the first node in the linked list and update the front pointer.
// queue is initially empty
// var Queue = { front: null, back: null };

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
// class Node { 
//   constructor(data, next) {
//     this.data = data;
//     this.next = next;
//   }
// }





// compute final position
// inventory list



// TO DO Change algo LOOK JS FILE