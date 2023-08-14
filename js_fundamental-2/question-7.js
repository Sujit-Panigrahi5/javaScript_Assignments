

let no=0;
let otp=2950;
function generateotp(){
   
  
    no=no+1
    
    if(no%2==0){
        
        otp=otp+200
        
        return otp;
    } else if(no % 3 == 0){
        
        otp=otp+1000
        return otp;
    } else if(no % 4 == 0){
        
        otp=otp+70
        return otp;
    } 
  
  otp=otp+no;
  return otp;
  
}

console.log('Here is  your otp :'+generateotp());
// console.log('Here is  your otp :'+generateotp());
// console.log('Here is  your otp :'+generateotp());
// console.log('Here is  your otp :'+generateotp());
// console.log('Here is  your otp :'+generateotp());
