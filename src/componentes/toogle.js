const rightToogle = document.querySelector('#right-toogle');
const leftToogle = document.querySelector('#left-toogle');
const body = document.querySelector('body');
const sectionInput = document.querySelector('section input');
const titleH1 = document.querySelector('main h1');

console.log(rightToogle, leftToogle, sectionInput, titleH1);

function toogle() {
    leftToogle.addEventListener('click', () => {
        leftToogle.style.display = 'none';
        rightToogle.style.display = 'flex';
        body.style.backgroundImage = 'url("https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png")';
        sectionInput.style.backgroundColor = '#FF6400';
        sectionInput.style.color = 'black';
        titleH1.style.color = '#FF6400';
        buttonSearch.style.color = '#FF6400';
    })
    
    rightToogle.addEventListener('click', () => {
        rightToogle.style.display = 'none';
        leftToogle.style.display = 'flex';
        body.style.backgroundImage = '';
        sectionInput.style.backgroundColor = '';
        titleH1.style.color = '';
        buttonSearch.style.color = '';
    })
}

toogle()
