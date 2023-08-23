
// const nameuser=document.getElementById("name")
// const password=document.getElementById("password")

// let namevalue=nameuser.value;
// let passwordvalue=password.value;

function valid(){
    const nameuser=document.getElementById("name")
    const password=document.getElementById("password")

    let namevalue=nameuser.value;
    let passwordvalue=password.value;
    let namearr=namevalue.split("")
    let passwordarr=passwordvalue.split("")

    console.log(namearr.length)
    if(namearr.length >=3 && passwordarr.length >=8){
        alert("From validation successful");
    } else{
        alert("From validation failed")
    }
}
