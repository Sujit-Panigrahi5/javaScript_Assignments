
const search = document.getElementById("search")
// const itemlist=document.getElementById("itemlist")
const itemlist=document.querySelector("ul")
const h1tag=document.querySelector("h1")
let item=[
    "Html",
    "CSS",
    "TailwindCSS",
    "Javascript",
    "github"
]

let i=["sujit","jit"]
let se=i.filter((i)=>i.includes("it"))
console.log(se)


function additem(item){
    h1tag.textContent="Result:"
    for(let i=0;i<item.length;i++){
        let itemtag = document.createElement("li")
        itemtag.textContent=item[i]
       itemlist.append(itemtag)
    }
}
// additem(item)


function searchitem(){
    let values=search.value
    let searchvalue=item.filter((arritem)=>arritem.includes(values))
    console.log(searchvalue)
    if(values==""){
        alert("you can search between Html,CSS,TailwindCSS,javascript,github")
        h1tag.textContent="search anything"
        let firstchild=itemlist.firstElementChild;
        while(firstchild != " "){
            itemlist.removeChild(firstchild)
            firstchild=itemlist.firstElementChild;
        }
        // h1tag.textContent="search anything"
    } else if(searchvalue.length==0){
        alert("no result found")
        h1tag.textContent="No result found"
    }
    else{

        additem(searchvalue)
    }

}


