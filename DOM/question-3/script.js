

const decrement=document.getElementById("decrement")
const counter=document.getElementById("counter")
const increment=document.getElementById("increment")

let count=0;

decrement.addEventListener("click",()=>{
    if(count-1<0){
        alert("Counter is going  beyond zero")
    } else{
        counter.innerHTML=count-1;
        count=count-1;
    }
    
})

increment.addEventListener("click",()=>{
    counter.innerHTML=count+1;
    count=count+1;
    
})