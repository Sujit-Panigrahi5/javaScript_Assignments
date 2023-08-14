

const eventDate="2023-08-31"

function calcultetheremainingDays(eventDate){
    let arr=eventDate.split("-")
    const date=new Date();
    let currentdate=date.getDate();
    return arr[2]-currentdate;
    
    
}


if(calcultetheremainingDays(eventDate) == 0){
    console.log("Today is the event ");
}else{
    console.log(calcultetheremainingDays(eventDate))
} 
