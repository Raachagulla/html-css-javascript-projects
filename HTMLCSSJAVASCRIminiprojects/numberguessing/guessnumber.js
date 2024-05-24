let text=document.querySelector(".text")
let guess=Math.floor( Math.random()*100)
let ng=document.querySelector(".no-of-guess")
let gussnumber=document.querySelector(".gueesed-numbers")
console.log(guess)
let guss=[]
let c=0
let btn=document.querySelector(".button")
let g=document.querySelector(".guess")
btn.addEventListener("click",getdata)
function getdata(){
  
    value=text.value
    let d=Math.floor((value+guess)/2)

    let e=Math.floor((d+value)/2)
    if(value<guess){
        
            g.innerText="your guess is too low"
            c+=1
            ng.innerText=`No.of guess:${c}`
            console.log(value)
            guss.push(value)
            console.log(c)
            console.log(guss[c])
            
           gussnumber.innerText=`Guessed numbers are:-${guss}`
            value=""
        }
        else if(value>guess){
            g.innerText="your guess is too high"
            c+=1
            ng.innerText=`No.of guess:${c}`
            console.log(value)
            guss.push(value)
            console.log(guss)
            
            gussnumber.innerText=`Guessed numbers are:-${guss}`
           
            value=""

        }
    else if(value==guess){
        g.innerText="your anser is correct"
        
        c+=1
        console.log(value)
            guss.push(value)
            console.log(guss)
            
           gussnumber.innerText=`Guessed numbers are:-${guss}`
        gussnumber.innerText=`Guessed numbers are:-${value}`
        value=""
     }
    //  if(value==guess){
    //     g.innerText="your guess is correct"
        
    //     c+=1
    //     ng.innerText=`No.of guess:${c}`
    //     value=""
    //  }
}
