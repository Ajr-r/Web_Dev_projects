export function adding_event(box_list){
    box_list.forEach(box => {
        box.addEventListener('click',()=>{
            if(sessionStorage.getItem(box.classList[0]))return;
            let sp=document.createElement('span')
            sp.innerText=sessionStorage.getItem('player');
            box.appendChild(sp);
            sessionStorage.setItem(box.classList[0],'boxnam')
            change();
        })
        box.addEventListener('mouseover',()=>{
            let c='';
            if(sessionStorage.getItem('player')==='x') c='green';
            else c='red';
            box.style.backgorund=c;
        })

    });
    
}
function change(player){
    if(sessionStorage.getItem('player')==='x'){
        sessionStorage.setItem('player','o');
    }
    else sessionStorage.setItem('player','x');
}
function hover(box_list){

}