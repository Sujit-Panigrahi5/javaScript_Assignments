

const products=[
    {name:"Laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"Laptop Bag",price:20000},
    {name:"Watch",price:20000},
    {name:"Mobile Charger",price:1500},
   

]
foundMaxAndMinproduct();

function foundMaxAndMinproduct(){
    let max=0;
    let maxproductname="";

    let min=Infinity;
    let minproductname="";
    for (let item of products) {

        

        // max product name 
        if(item.price> max){
            max=item.price;
            maxproductname=item.name;
           
        }
        // min product name

        if(item.price < min){
            min=item.price;
            minproductname=item.name;
        }
    }

    console.log("The product with maximum amount is "+maxproductname+" which is priced at Rs. "+max);

    console.log("The product with minimum amount is Mobile "+minproductname +" which is priced at Rs. " +min)
}

