
// function haspropoty(obj,nameofpropoty){
//    return obj.hasOwnProperty(nameofpropoty)
// }

function haspropoty(nameofpropoty){
   return this.hasOwnProperty(nameofpropoty)
}
const studentsInfo={
    name:"sujit Panigrahi",
    age:20,
    grade:"a",
    updategrade:function(updategrade){
        this.grade=updategrade
    }
}
// console.log(haspropoty(studentsInfo,"name"))
console.log(haspropoty.call(studentsInfo,"name"))


