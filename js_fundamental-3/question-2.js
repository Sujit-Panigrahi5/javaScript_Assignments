
const studentsInfo={
    name:"sujit Panigrahi",
    age:20,
    grade:"a",
    updategrade:function(updategrade){
        this.grade=updategrade
    }
}



studentsInfo.updategrade("e")

console.log(Object.entries(studentsInfo))

