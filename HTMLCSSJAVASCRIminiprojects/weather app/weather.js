let text=document.getElementById("text")
let btn=document.getElementById("btn")
let temperature=document.getElementById("temperature")
let place=document.getElementById("place")
apikey="8f4485f5f505ef4d2ad72e90b213a15f"
btn.addEventListener('click',getdata)


function getdata(){
let loc=text.value;

url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
let a=fetch(url)
console.log(a)
a.then(function(data){
    
    data.json().then(function(msg){
       console.log(msg)
        const{name}=msg
        console.log(msg.name)
        const{feels_like}=msg.main
        console.log(feels_like)
        var e=feels_like-273
        temperature.innerText=Math.floor(e)
        place.innerText=name
    })
})
}
