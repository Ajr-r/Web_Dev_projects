// console.log(document.querySelectorAll('.cont div'));
import './../css/main.css'
import {adding_event} from './events.js'
sessionStorage.clear(); 

 localStorage.removeItem('player')
 let curplayer='';
 if(!sessionStorage.getItem('player'))sessionStorage.setItem('player','x');
 let box_list=document.querySelectorAll('.cont div');
 adding_event(box_list);
 

