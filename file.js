const fs = require('fs')

fs.writeFile('welcome.txt', "Hello Node", (err) => {
    if(err) console.log(err)
    console.log('File has been written to')
})

fs.readFile('hello.txt', (err, data) => {
    if(err) throw err
    console.log(data)
})