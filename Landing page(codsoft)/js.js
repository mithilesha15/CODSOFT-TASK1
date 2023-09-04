const romeimage=document.querySelector('.egypt');
const egyptimage=document.querySelector('.rome');
const closeBtn=document.querySelector('.close');
const closeBtn1=document.querySelector('.close');
const popup=document.getElementById('popup');
const popup1=document.getElementById('popup1');

egyptimage.addEventListener('click', ()=> {
    popup1.style.display='block';
});
romeimage.addEventListener('click', ()=> {
    popup.style.display='block';
});

closeBtn.addEventListener('click',(event)=>{
   
        popup.style.display='none';
       
    
});
closeBtn1.addEventListener('click',(event)=>{
   

    popup1.style.display='none';

});
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}); 

window.addEventListener('click', (event) => {
    if (event.target === popup1) {
        popup1.style.display = 'none';
    }
}); 

