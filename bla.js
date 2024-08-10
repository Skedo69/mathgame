let num = 0;
let num2 = 0;
let Streak = 0;
let wins =0;
let run = false;
function Generate(){
    if(!run){
        num = Math.floor(Math.random()*100+1)
        num2 = Math.floor(Math.random()*100+1)
        document.getElementById("header").textContent = `${num} X ${num2}`
        document.getElementById("value2").value = ""
        run = true;
    }
}
function Checker(){
    if(num*num2 == document.getElementById("value2").value){
        wins ++;
        Streak ++;
        document.getElementById("header").textContent = `3ash!, Streak:${Streak}`
        num = Math.floor(Math.random()*100+1)
        num2 = Math.floor(Math.random()*100+1)
        document.getElementById("strok").textContent = `Your Streak is: ${Streak}🔥`
        document.getElementById("won").textContent = `Your Wins is: ${wins}`
        run = false;
        run = false;
    }
    else{
        Streak = 0;
        document.getElementById("header").textContent = `7mar 😢, the number was ${num*num2}`
        document.getElementById("strok").textContent = `Your Streak is: ${Streak}`
        run = false;
    }
}
