console.log('💩')

const shareBtn = document.querySelector('.share');
const bottom = document.querySelector('.bottom');

const color = getComputedStyle(document.documentElement)
.getPropertyValue('--desaturated-dark-blue');
let toggler= true;

// #999999

const innerHTML = `
<img  src="images/avatar-michelle.jpg" alt="Michelle" class="avatar">
<div class="person-info">
  <p>Michelle Appleton</p>
  <p>28 Jun 2020</p>  
</div>`

console.log(shareBtn)

shareBtn.addEventListener('click',function () {
    if(toggler){
        bottom.style.backgroundColor = color
        toggler= false;
    }
    else{
        bottom.style.backgroundColor = 'pink'
        toggler= true;
    }
    const img = shareBtn.firstElementChild;
    console.log(img)
    shareBtn.classList.toggle('share')
    shareBtn.classList.toggle('shareClicked')
    img.classList.toggle('shareBtnActive')
    // console.log( shareBtn.firstElementChild);
})

