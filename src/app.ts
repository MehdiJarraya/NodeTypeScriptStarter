// tsc command to COMPILE our ts in javascript not to run ^^
// we can also installed typescript ts-node and nodemon as dev dependencies
// we can also install @types/node and @types/express to get their specific types as dev dependencies


// "scripts": {
//     // tsc to build ts to js and we specefic the path ./dist in tsconfig.json 
//     "build": "tsc -p .",
//     "start": "node dist/app.js",
//     "dev": "nodemon src/app.ts"
//   }
console.log("Hello World");


// const getSmallestSubarrayWithSameDegree=(numbers: number[]): number[] => {
//     let occurences: Map<number, number> = new Map();
//     numbers.forEach(element => occurences[element] ? occurences[element]++ : 1);
//     let degree = 0
//     for (key in occurences) {
//         if (occurences[key] > degree) {
//             degree = occurences[key];
//         }
//     }

//     console.log("Degree: " + degree);
//     return [];


// }

// console.log("getSmallestSubarrayWithSameDegree([1, 2, 2, 3, 1, 4, 2])", getSmallestSubarrayWithSameDegree([1, 2, 2, 3, 1, 4, 2]));