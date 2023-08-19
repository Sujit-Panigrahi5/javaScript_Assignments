const studentsInfo={
    name:"sujit Panigrahi",
    age:20,
    grade:"a",
    updategrade:function(updategrade){
        this.grade=updategrade
    }
}

function printpropoties(){
    console.log(Object.keys(this))
}
printpropoties.call(studentsInfo)