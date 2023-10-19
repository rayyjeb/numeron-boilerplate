// Iteration 2: Generate 2 random number and display it on the screen
//Range for math.random lowest=0 highest<1 
var num1;
var num2;
let num1_box= document.getElementById("number1");
let num2_box= document.getElementById("number2");

function generateRandomNumber(){
    num1=Math.floor(Math.random()*100);
    num2=Math.floor(Math.random()*100);
    num1_box.textContent=num1;
    num2_box.textContent=num2;
}
generateRandomNumber();

// Iteration 3: Make the options button functional
let score=0;

let greater_than=document.getElementById("greater-than");
let equal_to=document.getElementById("equal-to");
let lesser_than=document.getElementById("lesser-than");

greater_than.onclick=()=>{
    if(num1>num2){
        score++;
       generateRandomNumber();
        console.log(score);
        localStorage.setItem("score", score);
        clearInterval(interval);
        startInterval();
    }else{
        window.open("./gameover.html","_self")
    }
   

}

equal_to.onclick=()=>{
    if(num1==num2){
        score++;
        generateRandomNumber();
        localStorage.setItem("score", score);
        clearInterval(interval);
        startInterval();
    }else{
        window.open("./gameover.html","_self")
    }

}

lesser_than.onclick=()=>{
    if(num1<num2){
        score++;
        generateRandomNumber();
        localStorage.setItem("score", score);

        clearInterval(interval);
        startInterval();
    }else{
        window.open("./gameover.html","_self")
    }
  
}
// Iteration 4: Build a timer for the game
let timer_box= document.getElementById("timer");
let interval;
function startInterval(){
    time=5; 
 interval= setInterval(()=>{ 
     timer_box.textContent=time;
     time--;
     if(time==0){
         location.href="./gameover.html"
         clearInterval(interval);
        }
},1000)
}
startInterval()
localStorage.setItem("score", score)