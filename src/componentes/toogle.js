// Select elements from the DOM
const rightToogle = document.querySelector('#right-toogle');
const leftToogle = document.querySelector('#left-toogle');
const body = document.querySelector('body');
const sectionInput = document.querySelector('section input');
const titleH1 = document.querySelector('main h1');

// Function to handle toggle behavior
function toogle() {
    // Left toggle click event listener
    leftToogle.addEventListener('click', () => {
        // Hide left toggle, show right toggle
        leftToogle.style.display = 'none';
        rightToogle.style.display = 'flex';

        // Update body background image
        body.style.backgroundImage = 'url("https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png")';

        // Update section input styles
        sectionInput.style.backgroundColor = '#FF6400';
        sectionInput.style.color = 'black';

        // Update title and button colors (assuming a button with id "buttonSearch" exists)
        titleH1.style.color = '#FF6400';
        buttonSearch.style.color = '#FF6400';
    })
    
    // Right toggle click event listener
    rightToogle.addEventListener('click', () => {
        // Hide right toggle, show left toggle
        rightToogle.style.display = 'none';
        leftToogle.style.display = 'flex';

        // Reset body background image
        body.style.backgroundImage = '';

        // Reset section input styles
        sectionInput.style.backgroundColor = '';
        sectionInput.style.color = '';

        // Reset title and button colors
        titleH1.style.color = '';
        buttonSearch.style.color = '';
    })
}

// Call the toogle function to initialize event listeners
toogle()
