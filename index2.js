const fs = require('fs')

// use fs to import a file (async by nature)
function importFile() {
    fs.readFile('./data.txt', 'utf8', (err, data) => {
        if (err) {
            return console.log(err)
        }
        console.log(data)
        let strData = data.toString()
        let intData = parseInt(strData)
        console.log(intData)
    })
}
importFile()