
function unqueCharacterCheck(name){
    let namearr=name.split("")
    let isprisent=[];
    let i=0;
    for (let char of namearr) {
        if(isprisent.includes(char)){
            console.log("the input string contain duplicate")
            return;
        } 
        isprisent[i]=char;
        i++;
    }
    console.log("The inpout string contain unique character")
}
unqueCharacterCheck("mithun")
unqueCharacterCheck("anurag")
