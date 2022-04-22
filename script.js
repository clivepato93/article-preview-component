// console.log('💩')

let shareBtns = document.querySelectorAll('.share');
const firstArrow = document.querySelector('.shareIcon');
let links = document.querySelector('#linksTab');
// const arrrow = document.querySelector('.shareIcon');
// const bottom = document.querySelector('.bottom');
// const person = document.querySelector('.person');
// const links = document.querySelector('.links');
// const links2 = document.querySelector('.links2');
// const color = getComputedStyle(document.documentElement)
// .getPropertyValue('--desaturated-dark-blue');
const veryDarkGrayishBlue = getComputedStyle(document.documentElement)
.getPropertyValue('--very-dark-grayish-blue');
const verylight = getComputedStyle(document.documentElement)
.getPropertyValue('--very-dark-grayish-blue');
let toggler = false;

// // console.log(window.innerWidth>900)

// // #999999

// function clicked() {
//     shareBtn.addEventListener('click',function () {
//         shareBtn.classList.toggle('shareClicked')
//         arrrow.classList.toggle('shareBtnActive')
//         bottom.classList.toggle('dark')
//         person.classList.toggle('flexy')
//         person.classList.toggle('n')
//         links.classList.toggle('n')
//         links.classList.toggle('flexy')
//     })
// }

// window.addEventListener('resize',function(){
//     console.log(window.innerWidth)

// if(window.innerWidth<=900){

    
//     clicked();
// }

// })

function btnTogglerActive(){
    firstBtn.classList.remove('light')
    firstBtn.classList.add('dark')
    firstArrow.classList.add('clicked')
    links.style.display = 'flex';
    links.style.position = 'absolute';
    toggler= true;
    // firstBtn.style.backgroundColor = veryDarkGrayishBlue;

}

function btnToggler(){
    firstBtn.classList.toggle('light')
    // firstBtn.classList.toggle('dark')
    // firstBtn.style.backgroundColor = veryDarkGrayishBlue;
    firstArrow.classList.toggle('clicked') 
    links.style.display = 'none';
    toggler= false;

}

const firstBtn = shareBtns[0];

// firstBtn.addEventListener('click',btnToggler)

shareBtns.forEach(btn=>{
    btn.addEventListener('click',function () {
        // btn.classList.toggle('shareClicked')
        // arrrow.classList.toggle('shareBtnActive')
        // bottom.classList.toggle('dark')
        // person.classList.toggle('flexy')
        // person.classList.toggle('n')
        // links.classList.toggle('flexy')
        // links.classList.toggle('n')
        if(toggler==false){
            btnTogglerActive();
            toggler= true
        }

        else{
            btnToggler();
            toggler= false;
        }







        // if(toggler==false){
        //     links.style.display = 'flex';
        //     links.style.position = 'absolute';
        //     toggler= true;
        // }
        
        
        // else if(toggler==true){

            // links.style.display = 'none';
            // btnToggler();
            // toggler= false;
            // btnToggler()
        // }
    }) 
})
