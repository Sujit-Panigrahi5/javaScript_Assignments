



let students=[
    {
        name:"Mithun",
        marks:95,
    },

    {
        name:"Prabir",
        marks:75,
    },

    {
        name:"Alka",
        marks:92
    },
    
    {
        name:"Shivam",
        marks:70
    },
    
    {
        name:"Farman",
        marks:99
    },
]

// students.forEach(function(item,index,array){
//     if(item.marks >=90){
//         console.log("Congratulations "+ item.name + "!you have cleared the exam.")
//     }
// })

function checkResults(name){
    // students.forEach(function(item,index,array){
    //     if(item.name == name){
    //         if(students[index].marks >=90){
    //             console.log("Congratulations "+ name + "!you have cleared the exam.")
    //         } else{
    //             console.log("Sorry! you have not cleared the exam")
    //         } 
    //         return;
    //     } 
    // })

   for(let i=0;i<students.length;i++){
        if(students[i].name == name){
            if(students[i].marks >=90){
                console.log("Congratulations "+ name + "!you have cleared the exam.")
            } else{
                console.log("Sorry! you have not cleared the exam")
            } 
            return;
        }
    }
    console.log("invalid user!!!")
}

checkResults("Mithun");
checkResults("Prabir");
checkResults("sujit")