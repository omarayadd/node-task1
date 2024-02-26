
const fs = require("fs")

const addPerson = (id,fname, lname, age, city) =>{
    const allData = loadData()
    const duplicatedData = allData.filter((obj)=>{
        return obj.id === id
    })

    if(duplicatedData.length===0){
    allData.push({
        id: id,
        fname: fname,
        lname : lname,
        age : age,
        city: city
    })
    saveAllData(allData)
    }
    else{
        console.log("Duplicated Id")
    }
}


function loadData(){
    try{
    const loadDataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(loadDataJson)
    }
    catch{
        return []
    }
}

function saveAllData(allData){
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json", allDataJson)
}

const deleteData = (id) =>{
    const allData = loadData()
    const dataToKeep = allData.filter((obj)=>{
        return(obj.id!== id)
    })
    saveAllData(dataToKeep)
}

const readData = (id) =>{
    const allData = loadData()
    const data = allData.find((obj)=>{
        return(obj.id===id)
    })
    if(data){
        console.log(data)
    }
    else{
    console.log("not found")
    }
}

const listData = () =>{
    const allData = loadData()
    allData.map((item)=>{
        console.log(item.fname, item.lname, item.age)
    })
}
module.exports = {addPerson, deleteData, readData, listData}