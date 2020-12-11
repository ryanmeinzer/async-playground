const fs = require('fs')

// // use a 'consoleLogIt' callback to run after another 'sumNums' function
// function consoleLogIt(it) {
//     console.log(it)
// }
// function sumNums(num1, num2, callback) {
//     let sum = num1 + num2
//     callback(sum)
// }
// sumNums(3, 4, consoleLogIt)

// // use a 'sayHi' callback with setTimeout() to be executed after timeout
// setTimeout(sayHi, 1000)
// function sayHi() {
//     console.log('Hi')
// }


// // use fs to import a file
// function importFile() {
//     fs.readFile('./data.txt', 'utf8', (err, data) => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log(data)
//     })
// }
// importFile()

// // use a 'fileImported' callback to wait for a file to import with fs
// function fileImported(data) {
//     console.log('File Imported!')
//     console.log('here is that file data:', data)
// }
// function importFile(callback) {
//     fs.readFile('./data.txt', 'utf8', (err, data) => {
//         if (err) {
//             return console.log(err)
//         }
//         callback(data)
//     })
// }
// importFile(fileImported)



// use a 'fileImported' promise to wait for a file to import with fs
function successCallback() {
    console.log('success')
}
function failureCallback(err) {
    console.log(err)
}
function showData(data) {
    console.log('here is that file data:', data)
}
let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(fs.readFile('./data.txt', 'utf8', (err, data) => {
        if (err) {
            return console.log(err)
        }
        showData(data)
    }))
    myReject(err)
})

myPromise.then(successCallback, failureCallback)