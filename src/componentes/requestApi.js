// Select DOM elements
const groupCards = document.querySelector('#group-cards');
const card = document.querySelectorAll('.card');
const inputSearch = document.querySelector('#input-search');
const buttonSearch = document.querySelector('#button-search');
const errorSearch = document.querySelector('#error-search');

// Function to clear the search input
function clean() {
    inputSearch.value = ''
}

// (Comment assuming this line is executed externally)
// Starts a json-server to mock an API endpoint at http://localhost:3000/services
//command: npx json-server src/db.json

// Function to fetch all cards data from the API
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/services'); // Fetch data from the API endpoint
        const data = await response.json(); // Parse the response as JSON

        // Loop through each card in the fetched data
        data.forEach(card => {
            const srcImg = card.image; // Extract image URL
            const title = card.name; // Extract card title
            const description = card.description; // Extract card description
            const link = card.link; // Extract card link
            const category = card.category; // Extract card category

            // Build the HTML structure for each card
            groupCards.innerHTML += `
            <li class="card item-resultado">
                <img src=${srcImg} alt="service icon" />
                <h2>${title}</h2>
                <h3 class="descricao-meta">Description: ${description}</h3>
                <h3 class="descricao-meta">Category: ${category}</h3>
                <a href=${link} target="_blank">mais informações</a>
            </li>
            `;
            
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error); // Log any errors during data fetching
    }
}

fetchData(); // Call the fetchData function to fetch initial data

// Function to handle search button click
// function requestFetchSearch() {
//     buttonSearch.addEventListener('click', () => {
//         let value = `${inputSearch.value}`; // Get the search input value
//         value = value.toLowerCase();
//         console.log(value);

//         async function fetchSearch() {
//             try {
//                 const response = await fetch(`http://localhost:3000/services?name=${value}`); // Build the search API endpoint URL
//                 const data = await response.json();
//                 let title = ""; // Declare title variable outside the loop (assuming it's used for comparison later)
//                 data.forEach(card => {
//                     let srcImg = card.image;
//                     title = card.name;
//                     let description = card.description;
//                     let link = card.link;
//                     let category = card.category;
                    
//                     // Only display search results if there's input
//                     if (value.length > 0) { // if value has a length greater than 0, so clear previous results and display only the searched card
//                     groupCards.innerHTML = ` 
//                     <li class="card item-resultado ">
//                         <img src=${srcImg} alt="service icon" />
//                         <h2>${title}</h2>
//                         <h3 class="descricao-meta">Description: ${description}</h3>
//                         <h3 class="descricao-meta">Category: ${category}</h3>
//                         <a href=${link} target="_blank">mais informações</a>
//                     </li>
//                     `;
//                     }
//                 });                
    
//                 // Validate search results
//                 if (value === title || value === description || value === category) { // Assuming title is used for comparison
//                     inputSearch.style.border = '2px solid green'; // Set green border for successful search
//                     errorSearch.innerText = ''; // Clear any previous error message
//                 } else {
//                     inputSearch.style.border = '2px solid red'; // Set red border for failed search
//                     errorSearch.innerText = 'Por favor, digite o serviço corretamente!'; // Display error message
//                     groupCards.innerHTML = "Não foi encontrado o serviço especificado. Por favor, digite o nome completo do serviço."
//                 }
//                 clean(); // Clear the search input after processing 
//             } catch (error) {
//                 console.error('Erro ao buscar dados:', error); // Log any errors during search fetching
//             }
//         }
    
//         fetchSearch(); // Call the fetchSearch function to perform the search
//     })
// }

// requestFetchSearch()

//_______________________________________________________________________________________________________________

function requestFetchSearch() {
    buttonSearch.addEventListener('click', () => {
        let value = `${inputSearch.value}`;
        value = value.toLowerCase();

        let lowerName = '';
        let lowerDescription = '';
        let lowerCategory = '';

        let newGroupCardFilter = [];
        
        async function fetchSearch() {
            groupCards.innerHTML = '';
            try {
                const response = await fetch(`http://localhost:3000/services`); 
                const data = await response.json();

                data.filter(card => {
                    lowerName = card.name.toLowerCase()
                    lowerDescription = card.description.toLowerCase()
                    lowerCategory = card.category.toLowerCase()
                    
                    if ((lowerName.includes(value) && (value.length > 0)) || (lowerDescription.includes(value) && (value.length > 0)) || (lowerCategory.includes(value) && (value.length > 0))) {
                    
                    let title = card.title; 
                    let srcImg = card.image;
                    title = card.name;
                    let description = card.description;
                    let link = card.link;
                    let category = card.category;
                    
                    groupCards.innerHTML += ` 
                    <li class="card item-resultado ">
                        <img src=${srcImg} alt="service icon" />
                        <h2>${title}</h2>
                        <h3 class="descricao-meta">Description: ${description}</h3>
                        <h3 class="descricao-meta">Category: ${category}</h3>
                        <a href=${link} target="_blank">mais informações</a>
                    </li>
                    `;
                    
                    newGroupCardFilter = [card];
                    
                    }                                             
                });               
               
                if (newGroupCardFilter.length > 0) {
                    inputSearch.style.border = '2px solid green';
                    errorSearch.innerText = ''; 
                    console.log(newGroupCardFilter.length)
                } else {
                    inputSearch.style.border = '2px solid red'; 
                    errorSearch.innerText = 'Por favor, digite o serviço corretamente!'; 
                    groupCards.innerHTML = "Não foi encontrado o serviço especificado. Por favor, digite o nome completo do serviço."
                    console.log(newGroupCardFilter.length)
                }
                clean();
            } catch (error) {
                console.error('Erro ao buscar dados:', error); 
            }
        }
    
        fetchSearch(); 
    })
}

requestFetchSearch()
