const { error, log } = require("console")
const fs = require("fs")


//sync
//  const result =  fs.writeFileSync("./test.txt", "Hey there")
// console.log(result);

//async

// fs.writeFile("./test.txt", "Hey there async", (error) => (error))

// const result = fs.readFileSync('./contact.txt', 'utf-8')
// console.log(result);



// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("error " + err);
//     } else {
//         console.log(result);
//     }
// })


fs.appendFileSync("./test.txt", `${Date.now()}Hey there\n`)

fs.copyFileSync("./test.txt", "./copy.txt")
