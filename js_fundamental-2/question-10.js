

function wordCounter(sentance){
    let arr=sentance.split(" ")
    let map1=new Map();
    for(let i=0;i<arr.length;i++){
        if(map1.has(arr[i])){
        map1.set(arr[i],map1.get(arr[i])+1); 
        } else{
            map1.set(arr[i],1)
        }
    }
    return map1;
}
let sentance="please please sumbit your assgnment on time, your assgnments are important"
let  result = wordCounter(sentance)
console.log( result)


