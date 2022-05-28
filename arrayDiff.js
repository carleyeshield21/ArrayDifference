// This is the link to this JavaSCript Challenge
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
    arr = a.filter(n => !b.includes(n))
    console.log(`The array without the recurring elements is ${arr}`)
    console.log(`Sorting the array in ascending order: ${arr.sort()}`)
}
arrayDiff([1,2],[1])
console.log('=====')
arrayDiff([1,2,2,2,3],[2])
console.log('=====')
arrayDiff([1,7,2,2,2,8,3],[2])