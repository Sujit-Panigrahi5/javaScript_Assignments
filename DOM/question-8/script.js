




function printtime(){

    const spantag1=document.getElementById("spantag1")
    const spantag2=document.getElementById("spantag2")
    const spantag3=document.getElementById("spantag3")

    let date=new Date();

    let hours=date.getHours().toString().padStart(2,"0")
    let minut=date.getMinutes().toString().padStart(2,"0")
    let second=date.getSeconds().toString().padStart(2,"0")

    spantag1.innerText=hours;
    spantag2.innerText=minut;
    spantag3.innerText=second;

    document.querySelector("body").style.backgroundColor="#"+hours+minut+second;
    document.getElementById("div").style.borderColor="#"+minut+second+hours;
    // alert("hii sujit")
    // console.log("hii sujit")
}

setInterval(printtime,1000)

