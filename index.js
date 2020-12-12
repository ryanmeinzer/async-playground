const fs = require('fs')

// // use a 'consoleLogIt' callback to run after another 'sumNums' function (non-async)
// function consoleLogIt(it) {
//     console.log(it)
// }
// function sumNums(num1, num2, callback) {
//     let sum = num1 + num2
//     callback(sum)
// }
// sumNums(3, 4, consoleLogIt)

// // use a 'sayHi' callback with setTimeout() to be executed after timeout (async)
// setTimeout(sayHi, 1000)
// function sayHi() {
//     console.log('Hi')
// }

// // use a 'consoleLogIt' and add five after 'sumNums' has been determined with a callback after a timeOut (async)
// function consoleLogIt(it) {
//     console.log(it + 5)
// }
// function sumNums(num1, num2, callback) {
//     let sum = 0
//     setTimeout(function calcSum() {
//         sum = num1 + num2
//         callback(sum)
//     }, 1000)
//     console.log('sum after initing the timeout: ', sum)
// }
// sumNums(3, 4, consoleLogIt)

// // use fs to import a file (async by nature)
// function importFile() {
//     fs.readFile('./data.txt', 'utf8', (err, data) => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log(data)
//     })
// }
// importFile()

// // use a promise to async import a file with fs
// const myPromise = new Promise(function(resolve, reject) {
//     fs.readFile('./data.txt', (err, data) => {
//         if (err) reject(err + ' bad fail')
//         resolve(data + ' great success')
//     })
// })
// myPromise
// // .then and .catch need a callback/function
// // 'data' and 'err' can be named anything, are referencing 'resolve' and 'reject'
// .then(data => console.log('win!', data))
// .catch(err => console.log('fail!', err))

// // another take, although a pointless shorthand example
// new Promise( resolve => resolve(' great success')).then(nutin => console.log('win!', nutin))

// use a promise to async import a file with fs, convert to JSON Object then print all names of the dogs
const myPromise = new Promise(function (resolve, reject) {
    fs.readFile('./data.json', (err, data) => {
        if (err) reject(err + ' bad fail')
        resolve(data)
    })
})
myPromise
    // .then and .catch need a callback/function
    // 'data' and 'err' can be named anything, are referencing 'resolve' and 'reject'
    .then(data => convertToObject(data))
    .catch(err => console.log('fail!', err))
function convertToObject(data) {
    let myObj = JSON.parse(data)
    printNames(myObj)
}
function printNames(myObj) {
    let arr = []
    for (let el in myObj.dogs) {
        arr.push(myObj.dogs[el].name)
    }
    console.log('names:', arr)
}