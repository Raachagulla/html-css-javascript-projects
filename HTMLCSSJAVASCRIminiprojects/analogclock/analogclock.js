let hrhand=document.querySelector(".hour-hand")
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")
let hrs=document.querySelector(".hrs")
        let minhand=document.querySelector(".min-hand")
        let sechand=document.querySelector(".sec-hand")
        setInterval(updatetime,1000)
        function updatetime(){
            let date=new Date()
            console.log("seconds"+date.getSeconds())
            console.log("seconds in deg"+date.getSeconds()*6)
            console.log("minutes"+date.getMinutes())
            console.log("minutes in deg"+date.getMinutes()*6)
            console.log("hourss"+date.getHours())
            console.log("hourss in deg"+date.getHours()*30)
            sechand.style.transform=`rotate(${date.getSeconds()*6}deg)`
            minhand.style.transform=`rotate(${date.getMinutes()*6}deg)`
            hrhand.style.transform=`rotate(${date.getHours()*30}deg)`
            min.innerText=`${date.getMinutes()}`
            console.log(min.innerText)
            sec.innerText=`${date.getSeconds()}`
            hrs.innerText=`${date.getHours()-12}`
        }