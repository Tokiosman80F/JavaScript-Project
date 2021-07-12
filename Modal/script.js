'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');

const close=function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click',close)

overlay.addEventListener('click',close)

const open=function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i=0;i<btnOpenModal.length;i++)
 btnOpenModal[i].addEventListener('click',open);

///key press
document.addEventListener('keydown',function(e)//e means event
{
    console.log(e.key);
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
       close();
    }
})