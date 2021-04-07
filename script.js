var windowWidth=window.innerWidth;
var windowHeight=window.innerHeight;
var ball=document.querySelector("#ball");
var BallX=ball.getBoundingClientRect().x;
var BallY=ball.getBoundingClientRect().y;
var speedX=1;
var speedY=2;
var rods=document.querySelectorAll(".Rod");
rods[0].style.left=((windowWidth/2)-70)+"px";
rods[1].style.left=((windowWidth/2)-70)+"px";
var rodX=rods[0].getBoundingClientRect().x;
var rodSpeed=10;

// moving of the rods
document.addEventListener('keydown',function(e){

   moveRod(e.key);
});

function moveRod(keyCode){
    
        if(keyCode=="ArrowLeft" && rodX>0){
           rodX-=rodSpeed;
        }
        else if(keyCode=="ArrowRight" && rodX<windowWidth-140){
            rodX+=rodSpeed;
        }
        console.log(rodSpeed);
        console.log(rodX);
        rods[0].style.left=rodX+"px";
        rods[1].style.left=rodX+"px";
        console.log(rodX);

}


//to move the ball
ball.addEventListener('click',
function move(){
    setInterval(function(){
    if(BallX>windowWidth-50){
        speedX=-speedX;
        
    }
    if(BallY>windowHeight-50){
        speedY=-speedY;
    }
    if(BallX<0){
        speedX=-speedX;
        
    }
    if(BallY<0){
        speedY=-speedY;
    }      
    ball.style.left=BallX+"px";
    ball.style.top=BallY+"px";
    BallX+=speedX;
    BallY+=speedY;   
  },5);
}
);


