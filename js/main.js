let modalnav = document.getElementById('head-nav');
let openmodal = document.getElementById('openbtn');
let closemodal = document.getElementById('closebtn');

openmodal.addEventListener('click',function(){
    modalnav.classList.add('show-modal');
    closemodal.classList.add('d-close');
})
closemodal.addEventListener('click',function(){
    modalnav.classList.remove('show-modal');
    closemodal.classList.remove('d-close');

})