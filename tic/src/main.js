// console.log(document.querySelectorAll('.cont div'));
import './main.css';
import './assets/images/score.svg';
import './assets/images/subtract.svg';
import './assets/images/bigo.svg';


import {adding_event } from './events.js'
sessionStorage.clear(); 
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
const rndInt = randomIntFromInterval(1,2)
console.log(rndInt)

 localStorage.removeItem('player')
 let curplayer='';
 if(!sessionStorage.getItem('player')){
    sessionStorage.setItem('player','x');
    
}
let box_list=document.querySelectorAll('.cont div');
adding_event(box_list);
document.querySelector('.cp').addEventListener('click',()=>{
    document.querySelector('.m_screen').classList.add('dpn');
    document.querySelectorAll('.blur').forEach((e)=>{
        e.classList.add('unblur')
    })
    document.querySelector('.xicon').classList.add('dsp');
}) 

