console.log('💩')

let shareBtn = document.querySelector('.share');
const shareArrow = document.querySelector('.shareBtn');
const shareBtnTwo = document.querySelector('.shareBtn2');
const bottom = document.querySelector('.bottom');
const person = document.querySelector('.person');
const links = document.querySelector('.links');
const color = getComputedStyle(document.documentElement)
.getPropertyValue('--desaturated-dark-blue');
const veryDarkGrayishBlue = getComputedStyle(document.documentElement)
.getPropertyValue('--very-dark-grayish-blue');

let toggler= true;

// #999999

const innerHTML = `
<img  src="images/avatar-michelle.jpg" alt="Michelle" class="avatar">
<div class="person-info">
  <p>Michelle Appleton</p>
  <p>28 Jun 2020</p>  
</div>`

shareBtn.addEventListener('click',function(){

                person.style.display = 'none';
                links.style.display = 'flex';
                bottom.classList.toggle('dark');

})

shareBtnTwo.addEventListener('click',function(){
    person.style.display = 'flex';
    links.style.display = 'none';
    bottom.classList.toggle('dark');
    toggler= true;
})
