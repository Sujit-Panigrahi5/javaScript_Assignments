

function update(map,key,updatevalue){
    return map.set(key,updatevalue)
}

function delet1(map,key){
     map.delete(key)
}
const user=new Map();

user.set("name","sujit");
user.set("age",20)
user.set("email","ram@gmail.com")

delet1(user,"name")
console.log(user)