let question1=document.querySelector(".question h2")
let quizquestion=document.querySelector(".quiz-questions")
let correct=document.querySelector(".correct")
let answerdisplay=document.querySelector(".answerdisplay")
let options=document.querySelector(".options")

let opt1=document.getElementById("a-text")
console.log(opt1)
let answers=document.querySelectorAll(".answer")
console.log(answers)
let opt2=document.getElementById("b-text")
let opt3=document.getElementById("c-text")
let opt4=document.getElementById("d-text")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
var i=0;
marks=0;
console.log(answerdisplay.innerHTML)
console.log(answerdisplay.innerText)
console.log(answerdisplay)
let userselected=[

]
answers.forEach(function(element){
    console.log(element)
})
const questions=[
    {
        question:"what does html stands for",
        option1:"hypertext",
        option2:"hupertext",
        option3:"hloper",
        option4:"hipertext",
        correct:"b"
    },
    {
        question:"how to add style sheet",
        option1:"by inner",
        option2:"by outer",
        option3:"by insideout",
        option4:"byinsideout",
        correct:"a"
    },
    {
        question:"wat is meant by css",
        option1:"cascade",
        option2:"styledsheet",
        option3:"cascadestylesheet",
        option4:"style",
        correct:"a"
    },
    {
        question:"text formm",
        option1:"ok",
        option2:".txt",
        option3:"txt",
        option4:"..txt",
        correct:"c"
    }
]
console.log(questions)
loadquiz()
    btn2.addEventListener("click",nxtquestion)
    btn1.addEventListener("click",previousquestion)
    function loadquiz(){
        
          
         question1.innerText=questions[i].question
         opt1.innerHTML=questions[i].option1
         
         opt2.innerHTML=questions[i].option2
         opt3.innerText=questions[i].option3
         opt4.innerHTML=questions[i].option4
         deselect()
         if(userselected[i]){
            let selected=userselected[i]
            document.getElementById(selected).checked=true
         }
         if(i==questions.length-1){
            btn2.style.display="none"
            btn3.style.display="block"
         }
        
    
}
function deselect(){
    answers.forEach(function(element){
        element.checked=false
    })
}
function nxtquestion(){

let answer=getanswer()
if(answer){
    if(answer==questions[i].correct){
        marks++
        console.log(marks)
    }
    i++
    if(i<questions.length){
    loadquiz()
    }
}

    
}
function getanswer(){
    let answer;
    answers.forEach(function(element){
        console.log(element)
        if(element.checked){
            answer=element.id
            console.log("id"+answer)
            userselected[i]=answer
        }
    })
    return answer

}

function previousquestion(){
    i--
    loadquiz()
}
correct.innerHTML=questions[0].option2
    correct.innerHTML=questions[1].option1
 correct.innerHTML=questions[2].option1
 correct.innerHTML=questions[3].option3
 console.log(correct)
btn3.addEventListener("click",submit)
function submit(){
    if(getanswer()){
        quizquestion.style.display="none"
        answerdisplay.innerHTML=`Marks obtained ${marks} out of ${questions.length}<button id="showanswers">show answers</button>`
        console.log(answerdisplay.innerHTML)
        answerdisplay.style.display="flex"
        answerdisplay.style.display.flexdirection="column"
        // showanswer.style.display="block"
        let showanswer=document.querySelector("#showanswers")
console.log(showanswer)
showanswer.addEventListener("click",showinganswer)
function showinganswer(e){
    showanswer.style.display="none"
    console.log(answerdisplay)
    correct.innerText=correct
    correct.style.display="block"
console.log(e)
    
 }

    }
}



