let btn=document.querySelector(".btn")
console.log(1)
let succ=document.querySelectorAll(".ok")
let user=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let cpassword=document.getElementById("confirmpassword")
let para=document.querySelectorAll(".para")
console.log(para)
console.log(succ)
btn.addEventListener("click",submit)
function submit(){
    console.log(user.value)
    console.log(3)
    if(user.value){
    succ[0].classList.add("success")
    para[0].style.visibility="hidden"
    }
    if(!user.value){
    
                 console.log("error")
  for(i=0;i<para.length;i++){
 para[i].classList.add("error")
   }
}
}
