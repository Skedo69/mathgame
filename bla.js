let num = 0;
let num2 = 0;
let Streak = 0;
let wins =0;

function Generate(){
    num = Math.floor(Math.random()*100+1)
    num2 = Math.floor(Math.random()*100+1)
    document.getElementById("header").textContent = `${num} X ${num2}`
}
function Checker(){
    if(num*num2 == document.getElementById("value2").value){
        wins ++;
        Streak ++;
        document.getElementById("header").textContent = `Yaay!, Streak:${Streak}`
        num = Math.floor(Math.random()*100+1)
        num2 = Math.floor(Math.random()*100+1)
        document.getElementById("strok").textContent = `Your Streak is: ${Streak}🔥`
        document.getElementById("won").textContent = `Your Wins is: ${wins}`
    }
    else{
        Streak = 0;
        document.getElementById("header").textContent = `False 😢`
        document.getElementById("strok").textContent = `Your Streak is: ${Streak}`
    }
}