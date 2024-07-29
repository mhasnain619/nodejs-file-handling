const { error, log } = require("console")
const fs = require("fs")


//sync
// fs.writeFileSync("./test.txt", "Hey there")

//async

// fs.writeFile("./test.txt", "Hey there async", (error) => (error))

const result = fs.readFileSync('./contact.txt', 'utf-8')
console.log(result);