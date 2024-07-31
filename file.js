const fs = require("fs")
const os = require("os")

console.log(os.cpus.length);


// sync Blocking Request
// const result = fs.writeFileSync("./test.txt", "Hey there")
// console.log(result);

// async Non-Blocking request

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


// fs.appendFileSync("./test.txt", `${Date.now()}Hey there\n`)

// sync Blocking Request
// console.log(1);
// const result = fs.readFileSync("contact.txt", "utf-8")
// console.log(result);
// console.log(2);

// sync Non-Blocking Request


// console.log(1);
// fs.readFile("contact.txt", "utf-8", (err, result) => {
//     console.log(result);
// })
// console.log(2);
