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

});

let elfeatureContent = document.getElementById('feature-content');
let elfeaturebtn = document.getElementById('feature-btn');
let elfeatureline= document.getElementById('feature-line');
let elfeaturesqure= document.getElementById('feature-squre');
let elfeatureContentSec  = document.getElementById('feature-content-second');
let elfeaturebtnSec  = document.getElementById('feature-btn-second');
let elfeaturelineSec = document.getElementById('feature-line-second');
let elfeaturesqureSec = document.getElementById('feature-squre-second');
let elfeatureContentThird  = document.getElementById('feature-content-third');
let elfeaturebtnThird  = document.getElementById('feature-btn-third');
let elfeaturelineThird = document.getElementById('feature-line-third');
let elfeaturesqureThird = document.getElementById('feature-squre-third');




elfeaturebtn.addEventListener('click',function(){
    elfeatureContent.classList.add('f-hight');
    elfeatureline.classList.add('f-opi');
    elfeaturesqure.classList.add('f-squre');
    elfeatureContentSec.classList.remove('f-hight');
    elfeaturelineSec.classList.remove('f-opi');
    elfeaturesqureSec.classList.remove('f-squre');
    elfeatureContentThird.classList.remove('f-hight');
    elfeaturelineThird.classList.remove('f-no-opi');
    elfeaturesqureThird.classList.remove('f-squre');
});
elfeaturebtnSec.addEventListener('click',function(){
    elfeatureContentSec.classList.add('f-hight');
    elfeaturelineSec.classList.add('f-opi');
    elfeaturesqureSec.classList.add('f-squre');
    elfeatureContent.classList.remove('f-hight');
    elfeatureline.classList.remove('f-opi');
    elfeaturesqure.classList.remove('f-squre');
    elfeatureContentThird.classList.remove('f-hight');
    elfeaturelineThird.classList.remove('f-no-opi');
    elfeaturesqureThird.classList.remove('f-squre');
});
elfeaturebtnThird.addEventListener('click',function(){
    elfeatureContentThird.classList.add('f-hight');
    elfeaturelineThird.classList.add('f-no-opi');
    elfeaturesqureThird.classList.add('f-squre');
    elfeatureContent.classList.remove('f-hight');
    elfeatureline.classList.remove('f-opi');
    elfeaturesqure.classList.remove('f-squre');
    elfeatureContentSec.classList.remove('f-hight');
    elfeaturelineSec.classList.remove('f-opi');
    elfeaturesqureSec.classList.remove('f-squre');
});