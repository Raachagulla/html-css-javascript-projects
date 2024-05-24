let captchatext=document.getElementById("captcha-text")
let inputtext=document.getElementById("input-text")
let result=document.querySelector(".result")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let captcha="kfjf89u485345834jfklrmfeifjmioererlkfmlvkmio3ri9vmkv"
let a=Math.random()*10
let b=Math.floor(a)
//console.log(b)
captcha=captcha.substring(b,b+6)
captchatext.value=captcha

//console.log(captcha)

btn2.addEventListener("click",dataenter)
btn1.addEventListener("click",refresh)

function dataenter(){
   // console.log(captcha)

if(inputtext.value==captchatext.value){
    alert("valid captcha")
    result.innerText="nice valid capatcha"

}
else{
    alert("invalid captcha")
    result.innerText="Hu hu invalid capatcha"

}
    
}
function refresh(){
    //  console.log(3)
//    let captcha1="kfjf89u485345834jfklrmfeifjmioererlkfmlvkmio3ri9vmkv"
//       inputtext.value=" "
//       let d=Math.random()*10
//       console.log(d)
//       let e=Math.floor(d)
//       console.log(e)
//       captcha1=captcha1.substring(e,e+6)
//       captchatext.value=captcha1
location.reload()
  }
  console.log("hi")


