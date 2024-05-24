let btn=document.querySelector(".btn")
let images=document.querySelectorAll(".gallery img")
let popup=document.querySelector(".popup")
let popupimage=document.querySelector(".popup img")
console.log( images)
btn.addEventListener("click",close)
 function close(){
     popupimage.style.display="none"
//     popup.style.backgroundcolor="rgba(0,0,0,0)"
}
for(image of images){
     
     image.addEventListener("click",popimage)
     function popimage(){
        // btn.classList.toggle("active")
        popup.style.display="block"
        console.log(this)
        console.log(popupimage)
           popupimage.src=this.getAttribute("src")
           console.log(popupimage.src)
    
     }
    }
     btn.addEventListener("click",close)
     function close(){
    // popupimage.style.display="none"
   //  popup.style.backgroundcolor=`rgba(${0},${0},${0},${0})`
     console.log(3)
     popup.style.display="none"
}

    
