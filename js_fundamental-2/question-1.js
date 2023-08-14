
let username=[ "Sujit" ,"Mithun", "sandeep",]

function isUserPresent(name){
    if(username.includes(name)){
        console.log("yes, " +name+ " is a valid user")
    } else{
        console.log("no, " +name+ " is not  a valid user")
    }
}

isUserPresent("Sujit")