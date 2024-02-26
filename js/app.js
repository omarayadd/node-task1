//modules

//1- core modules

// const fs = require("fs")

//store data in a file

// fs.writeFileSync("data1.txt", " Omar Ayad")
// // read data from file
// console.log(fs.readFileSync("data1.txt").toString())
// // add another data to the file
// fs.appendFileSync("data1.txt", ",  Lobna Alkhateb")


/////////////////////////////////////////////////////

// const x = require("./allData")

// console.log(x.fName)
// console.log(x.lName)
// console.log(x.city)
// console.log(x.age)
// console.log(x.fun1(3,4))

////////////////////////////////////////////////////////////

//2 npm(node package manager)
// validate the email is correct format
const validator = require("validator")
const yargs = require("yargs")
// console.log(validator.isEmail("a@omar.ml.cm"))



//////////////////////////////////////////////////////////
// console.log(process.argv)

// const command = process.argv[2]


// if(command ==="add"){
//     console.log("add item")
// }
// else if(command==="delet"){
//     console.log("deleted item")
// }
// else{
//     console.log("error")
// }

// npm(yargs)

// console.log(yargs.argv)

// yargs.command({
//     command : "add",
//     describe : "to add an item",
//     handler : ()=>{
//         console.log("You have added an Item")
//     } 
// })

// console.log(yargs.argv)

// builder: options that command deal with

// yargs.command({
//     command : "add",
//     describe : "to add an item",
//     builder : {
//         fname:{
//            describe : "this is first name",
//            demandOption: true,
//            type : "string"
//         },
//         lname:{
//             describe : "this is last name",
//            type : "string"
//         }

//     },
//     handler : ()=>{
//         console.log("You have added an Item")
//     } 
// })

// console.log(yargs.argv)


// const person1 = {
//     fname : "Omar",
//     lname : "Ayad"
// }

// fs.appendFileSync("data1.txt", JSON.stringify(person1))


const data10 = require("./data10")
yargs.command({
    command : "add",
    describe : "to add an item",
    builder : {
        fname:{
           describe : "this is first name",
           demandOption: true,
           type : "string"
        },
        lname:{
            describe : "this is last name",
            demandOption: true,
            type : "string"
        }

    },
    handler : (x)=>{
        data10.addPerson(x.id,x.fname, x.lname, x.age, x.city)
    } 
})

yargs.command({
    command: "delete",
    describe : "delete an item",
    handler:(x) =>{
        data10.deleteData(x.id)
    }
})


yargs.command({
    command:"read",
    describe : "read data",
    builder :{
        id: {
            describe: "this is desription of ayhaga",
            demandOption : true,
            type: "String"
        }
    },
    handler : (x) =>{
        data10.readData(x.id)
    }
})

yargs.command({
    command : "list",
    describe: "list data",
    handler:() =>{
        data10.listData()
    }
})

yargs.parse()