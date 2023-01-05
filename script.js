const infoStep = document.getElementById('info-step');
const infoSection = document.getElementById('info');

const planStep = document.getElementById('plan-step');
const planSection = document.getElementById('plan');

const addStep = document.getElementById('add-step')
const addSection = document.getElementById('add');

const summaryStep = document.getElementById('summary-step')
const summarySection = document.getElementById('summary');

const block = document.querySelectorAll('.block-plan .block');

const btnInfo = document.getElementById('btn-info')
const btnPlan =document.getElementById('plan-btn');
const btnAdd = document.getElementById('add-btn');
const btnSummary = document.getElementById('btn-summary');

const   confirmSection =document.getElementById('confirm');

const form =document.getElementById('form');
const mail =document.getElementById('mail');
infoStep.addEventListener('click', (e)=>{
    infoStep.classList.add('active')
    planStep.classList.remove('active')
    addStep.classList.remove('active')
    summaryStep.classList.remove('active')
    planSection.style.display ='none'
    addSection.style.display ='none'
    summarySection.style.display ='none'
    confirmSection.style.display ='none'
    infoSection.style.display ='block'
});

planStep.addEventListener('click',(e)=>{
    infoStep.classList.remove('active')
    planStep.classList.add('active')
    addStep.classList.remove('active')
    summaryStep.classList.remove('active')
    infoSection.style.display ='none'
    addSection.style.display ='none'
    summarySection.style.display ='none'
    confirmSection.style.display ='none'
    planSection.style.display ='block'
})

addStep.addEventListener('click' , (e)=>{
    infoStep.classList.remove('active')
    planStep.classList.remove('active')
    addStep.classList.add('active')
    summaryStep.classList.remove('active')
    infoSection.style.display ='none'
    planSection.style.display ='none'
    summarySection.style.display ='none'
    confirmSection.style.display ='none'
    addSection.style.display ='block'
})


summaryStep.addEventListener('click' , (e)=>{
    infoStep.classList.remove('active')
    planStep.classList.remove('active')
    addStep.classList.remove('active')
    summaryStep.classList.add('active')
    infoSection.style.display ='none'
    planSection.style.display ='none'
    addSection.style.display ='none'
    confirmSection.style.display ='none'
    summarySection.style.display ='block'
})
block.forEach((el) =>{
    el.addEventListener('click' ,()=>{
        el.style.border = '2px solid  hsl(228, 100%, 84%)'
    });
})


// btnInfo.addEventListener('click' , (e)=>{
//     e.preventDefault();
//     infoSection.style.display ='none'
//     infoStep.classList.remove('active')
//     planStep.classList.add('active');
//     planSection.style.display ='block'
// })

btnPlan.addEventListener('click' , (e)=>{
    e.preventDefault();
    addSection.style.display ='block'
    addStep.classList.add('active')
    planStep.classList.remove('active');
    planSection.style.display ='none'
})

btnAdd.addEventListener('click' , (e)=>{
    e.preventDefault();
    summarySection.style.display ='block'
    summaryStep.classList.add('active')
    addStep.classList.remove('active');
    addSection.style.display ='none'
})

btnSummary.addEventListener('click' , (e)=>{
    e.preventDefault();
    confirmSection.style.display ='block'
    summaryStep.classList.remove('active');
    summarySection.style.display ='none'
})

form.addEventListener('submit' ,(e) =>{
e.preventDefault();
let checkValid = validationInputs();
if(checkValid){
    form.submit()
}else{
    console.log('error')
}
})

function validationInputs() {

}
mail.addEventListener('input' , (e)=>{
    console.log('maram')
    if(mail.validity.valid){
        console.log('an valid')
    }
})