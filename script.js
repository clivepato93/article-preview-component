// console.log('💩')

// let shareBtn = document.querySelector('.share');
const shareBtn = document.querySelector('.share');
const arrrow = document.querySelector('.shareIcon');
const bottom = document.querySelector('.bottom');
const person = document.querySelector('.person');
const links = document.querySelector('.links');
const links2 = document.querySelector('.links2');
const color = getComputedStyle(document.documentElement)
.getPropertyValue('--desaturated-dark-blue');
const veryDarkGrayishBlue = getComputedStyle(document.documentElement)
.getPropertyValue('--very-dark-grayish-blue');

let toggler = true;

// console.log(window.innerWidth>900)

// #999999


if(window.innerWidth<=900){

    
    shareBtn.addEventListener('click',function () {
        shareBtn.classList.toggle('shareClicked')
        arrrow.classList.toggle('shareBtnActive')
        bottom.classList.toggle('dark')
        person.classList.toggle('flexy')
        person.classList.toggle('n')
        links.classList.toggle('n')
        links.classList.toggle('flexy')
    })
}

if(window.innerWidth>900){

    
    shareBtn.addEventListener('click',function () {
        shareBtn.classList.toggle('shareClicked')
        arrrow.classList.toggle('shareBtnActive')

        // person.classList.toggle('flexy')
        // person.classList.toggle('n')
        links2.classList.toggle('n')
        links2.classList.toggle('flexy')
    })
}
    // const innerHTML = `
// <img  src="images/avatar-michelle.jpg" alt="Michelle" class="avatar">
// <div class="person-info">
//   <p>Michelle Appleton</p>
//   <p>28 Jun 2020</p>  
// </div>`



// window.addEventListener('resize',function () {
//     console.log('🥺',window.innerWidth)
//     if(window.innerWidth<900){
    
//         shareBtn.addEventListener('click',function(){
//                         person.style.display = 'none';
//                         links.style.display = 'flex';
//         })
        
//         shareBtnTwo.addEventListener('click',function(){
//             person.style.display = 'flex';
//             links.style.display = 'none';
//         })
    
//         console.log('😁')
//     }
// })

// if(window.innerWidth<900){
    
//     shareBtn.addEventListener('click',function(){
//                     person.style.display = 'none';
//                     links.style.display = 'flex';
//     })
    
//     shareBtnTwo.addEventListener('click',function(){
//         person.style.display = 'flex';
//         links.style.display = 'none';
//     })

//     console.log('😁')
// }

// if(window.innerWidth>=900){
//     if(toggler){
//         shareBtn.addEventListener('click', function(){
//         links.style.display = 'flex';
//         toggler = false;
//         console.log('😀', `toggle is ${toggler}`)
//     })}

//     if(!toggler){
//         shareBtn.addEventListener('click', function(){
//         links.style.display = 'none';
//         toggler =true;
//         console.log('😀', `toggle is ${toggler}`)
//     })}



// }

