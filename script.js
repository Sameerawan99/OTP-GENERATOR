let first = document.getElementById('otp1')
let second = document.getElementById('otp2')
let third = document.getElementById('otp3')
let fourth = document.getElementById('otp4')
let buttn = document.getElementById('generate')

function otp(){

    const digits = '0123456789'
    let otp = '';

    for(i=0; i<=3; i++){ 
        otp += digits[Math.floor(Math.random()*10)]; 
    }
  
    const otpArray = otp.split('')

   first.value = otpArray[0]
     second.value = otpArray[1]
     third.value = otpArray[2]
     fourth.value = otpArray[3]

     return otp;
   }

buttn.addEventListener("click",otp)

