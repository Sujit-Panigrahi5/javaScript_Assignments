

const toggle=document.getElementById("toggle")
const dark=document.getElementById("colorchange")
const info=document.querySelector(".info")
// toggle.addEventListener("click",()=>{
//     dark.classList.toggle("darktheme")
//     let color=dark.style.backgroundColor;
    
// })

toggle.addEventListener("click",()=>{
    let color =dark.style.backgroundColor;
    if(color === "black"){
        dark.style.backgroundColor="white"
        dark.style.color="black"
        info.innerHTML="This is light mode";
    } else{
        dark.style.backgroundColor="black"
        dark.style.color="white"
        info.innerHTML="This is dark mode";
    }
})

