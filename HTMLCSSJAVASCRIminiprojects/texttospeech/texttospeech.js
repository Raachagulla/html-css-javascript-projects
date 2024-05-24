let btn=document.getElementById("btn")
let textele=document.getElementById("text")
let voiceEle=document.getElementById("voicelist")
let speechSynth=speechSynthesis;
speechSynth.addEventListener("voiceschanged",loadvoices)
function loadvoices(){
    let voices=speechSynth.getVoices() 
    for(let voice of voices){
        let option=document.createElement("option")
    option.value=voice.name
    option.innerText=`${voice.name}${voice.lang}`
    voiceEle.appendChild(option)
   
}
console.log(voiceEle)
}

function texttospeech(txt){
    let utterance=new SpeechSynthesisUtterance(txt)
    for(voice of speechSynth.getVoices()){
        if(voice.name===voiceEle.value){
            utterance.voice=voice;
        }
    }
    speechSynth.speak(utterance)
}



btn.addEventListener('click',function(){
    console.log(3)
if(textele.value!==""){
    console.log(textele.value)
    if(!speechSynth.speaking){
        texttospeech(textele.value)
    }
    
}
else{
    alert("enter text")
}
})