
const select=document.getElementById("select")
let programminglist=[
    "javascript",
    "java",
    "python",
    "c++"
]
function additem(){
    for(let i=0;i<programminglist.length;i++){
        let item=document.createElement("option")
        item.textContent=programminglist[i]
        select.append(item)
    }
}
additem()