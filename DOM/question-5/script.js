

const info=document.getElementById("info")
const img=document.getElementById("img")

function toggleimg(){
    if(img.style.display=="none"){
        img.style.display="block"
        info.textContent="Your img is visiable"
    } else{
        img.style.display="none";
        info.textContent="your img is hidden"
    }
}