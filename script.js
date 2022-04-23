
const firstArrow = document.querySelector('.shareIcon');
const shareBtns = document.querySelectorAll('.share');
const firstBtn = shareBtns[0];
const veryDarkGrayishBlue = getComputedStyle(document.documentElement)
.getPropertyValue('--very-dark-grayish-blue');
const verylight = getComputedStyle(document.documentElement)
.getPropertyValue('--very-dark-grayish-blue');

let links = document.querySelector('#linksTab');
let toggler = false;

function btnTogglerActive(){
    firstBtn.classList.remove('light')
    firstBtn.classList.add('dark')
    firstArrow.classList.add('clicked')
    links.style.display = 'flex';
    links.style.position = 'absolute';
    toggler= true;
}

function btnToggler(){
    firstBtn.classList.toggle('light')
    firstArrow.classList.toggle('clicked') 
    links.style.display = 'none';
    toggler= false;

}


shareBtns.forEach(btn=>{
    btn.addEventListener('click',function () {
        if(toggler==false){
            btnTogglerActive();
            toggler= true
        }

        else{
            btnToggler();
            toggler= false;
        }
    }) 
})
