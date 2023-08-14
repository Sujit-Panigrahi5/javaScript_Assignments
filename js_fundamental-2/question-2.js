

function calculateTotalCartValue(... price){
    // console.log(price)

    return price.reduce(function(acc,curr){
        return acc+curr;
    } ,0 )
}

let totalprice=calculateTotalCartValue(125,20,30)
 console.log("The total cart value is "+totalprice)
