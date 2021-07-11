'use strict';
// document.querySelector('.message').textContent='Correct Number';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// console.log(document.querySelector('.guess').value);

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;

let highScore=0;

const displayMessage=function(message)
{
    document.querySelector('.message').textContent=message;   
}    

//check function 
document.querySelector('.check').addEventListener
('click',function()
{
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //if no number inputed
    if(!guess) 
    {
        displayMessage("No Number");
    }
    //when player wins 
    else if (guess===secretNumber)
    {
        displayMessage("Correct Number");
        document.querySelector('.number').textContent=secretNumber;
        //body change because player wins
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highScore)
        {   
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;

        }

    }
    //when guess is too high
    else if (guess>secretNumber)
    {   
        if(score>1)
        {
        displayMessage("Too High");
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            displayMessage("You Lose The GAME");
            document.querySelector('.score').textContent=0;   
        }
    }

    //when guess is too low
    else if(guess<secretNumber)
    {
        if(score>1)
        {
        displayMessage("Too Low");
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            displayMessage("You Lose The Game");
            document.querySelector('.score').textContent=0;
         }    
    }
})

document.querySelector('.again').addEventListener('click',function()
{
    secretNumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?'
    document.querySelector('.number').style.width='15rem';
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value=' ';
    }

    )