
const car={
    make:"mahindra",
    model:"Thar",
    year:2023,
}

console.log(Object.entries(car))
Object.entries(car).forEach((key,value)=>console.log(`key,value : ${key}`))