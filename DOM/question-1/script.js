const selectimg=document.getElementById("selectimg")
const uploadimg=document.getElementById("uploadimg")

function addimg(){
    const img=new FileReader();
    img.onload=function(e){
        uploadimg.src=e.target.result
    }
    img.readAsDataURL(selectimg.files[0])
}