var current = document.querySelector('current');
var next = document.querySelector('.next');
var current1 = document.querySelector('current1');
var next1 = document.querySelector('.next1');
var bg= document.querySelector('.gh');
var counters= $("div:eq(1)");
var counters2= $("div:eq(1)");
var counter;
var snd = new Audio('/hh.mp3');
var ko = new Audio('/final.mp3');
var enter = new Audio('/enter.mp3')
var lol = new Audio('/lol.mp3')
var haveit = new Audio('/haveit.mp3')
haveit.volume=0.1;
lol.volume=0.1;
enter.volume=0.1;
ko.volume=0.1;
snd.volume=0.1;

function startCounter(){
   
    var number = parseInt(document.getElementById("number").value);
    if(isNaN(number)){
        enter.play();
        alert("Enter the number first bitch");

        clearInterval(counter);
        return;
    }
    if(number==69){
        bg.classList.remove("active");
        bg.classList.add("eighteen");
        haveit.play();
        clearInterval(counter);
        return;

    }
    if((number<1) || (number>9 ) && number != 69){
        lol.play();
        alert("It is a single digit counter, put your glass on old lump of atoms");
        
        clearInterval(counter);
        return;
    }
    var currentNum = document.querySelector(".current");
    var nextNo = document.querySelector(".next");
    var currentNum1 = document.querySelector(".current1");
    var nextNo1 = document.querySelector(".next1");
    var count = 0;


    //if user click start counter again then resets the counter again starting me to reset hoga to itna change nahi dikhega

    resetNumbers(currentNum, currentNum1,nextNo1, nextNo);
   
    function say(){
        increaseCount(currentNum, currentNum1, nextNo1, nextNo);
         
        
          count++;
          if((number-count)==4){
            snd.play();
          }
          if(count==number){
              ko.play();
              clearInterval(counter);
              bg.classList.remove("active");
              bg.classList.add("active2");
              $( "div:eq(1)" ).removeClass( "nextj" ).addClass( "nextj3" );
              $( "div:eq(2)" ).removeClass( "nextj2" ).addClass( "nextj4" );
              return;
          }         
    }
    counter = setInterval(say,1000 ); 
}
if(count==number){
    alert("hi");
}

function resetNumbers(currentNum, currentNum1,nextNo1, nextNo){
    currentNum.innerText = 0;
    currentNum1.innerText = 0;
    nextNo.innerText = 1; 
    nextNo1.innerText = 1;
}

function increaseCount(currentNo, currentNo1, nextNo1, nextNo){
    nextNo.classList.add("animate");
    nextNo1.classList.add("animate2");
    $( "div:eq(1)" ).removeClass( "counter" ).addClass( "nextj" );
    $( "div:eq(2)" ).removeClass( "counter2" ).addClass( "nextj2" );
    bg.classList.add("active");
    setTimeout(function(){
        currentNo.innerText = nextNo.innerText;
        currentNo1.innerText = nextNo1.innerText;
        nextNo.classList.remove("animate");
        nextNo1.classList.remove("animate2");
        nextNo.innerText = parseInt(nextNo.innerText)+1;
        nextNo1.innerText = parseInt(nextNo1.innerText)+1;
    }, 500)
}

