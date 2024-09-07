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

//--------------------------------------------------------------
//Obs: utilizando o arquivo dados.js como banco de dados, opção 1

// Loop through each card
services.forEach(card => {
    const srcImg = card.image; 
    const title = card.name; 
    const description = card.description; 
    const link = card.link; 
    const category = card.category; 

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
})

function servicesSearch() {
    // Add event listener to the search button for click event
    buttonSearch.addEventListener('click', () => {
    
        // Get the value from the search input and convert it to lowercase
        let value = `${inputSearch.value}`;
        value = value.toLowerCase();

        // Initialize empty variables for storing converted data (lowercase)
        let lowerName = '';
        let lowerDescription = '';
        let lowerCategory = '';
        let lowerTags = '';

        // Create an empty array to store filtered cards
        let newGroupCardFilter = [];
        
        // Clear the existing content in the group cards container
        groupCards.innerHTML = '';

        // Filter the data using the filter method
        services.filter(card => {
        // Convert card properties (name, description, category and tags) to lowercase for case-insensitive search
            lowerName = card.name.toLowerCase()
            lowerDescription = card.description.toLowerCase()
            lowerCategory = card.category.toLowerCase()
            lowerTags = card.tags.toLowerCase()
            
            // Check if the search term is included in any of the converted properties (considering minimum length of 1 character)
            if ((lowerName.includes(value) && (value.length > 0)) || (lowerDescription.includes(value) && (value.length > 0)) || (lowerCategory.includes(value) && (value.length > 0)) || (lowerTags.includes(value) && (value.length > 0))) {
            
            // Extract card details for displaying results
            let title = card.title; 
            let srcImg = card.image;
            title = card.name;
            let description = card.description;
            let link = card.link;
            let category = card.category;
            
            // Build the HTML structure for each search result using template literals
            groupCards.innerHTML += ` 
            <li class="card item-resultado ">
                <img src=${srcImg} alt="service icon" />
                <h2>${title}</h2>
                <h3 class="descricao-meta">Description: ${description}</h3>
                <h3 class="descricao-meta">Category: ${category}</h3>
                <a href=${link} target="_blank">mais informações</a>
            </li>
            `;
            
            // Add the filtered card to the new array
            newGroupCardFilter.push(card);

            }                                             
        });               
        
        // Check if any results were found
        if (newGroupCardFilter.length > 0) {
            // Set green border for the search input indicating successful search
            inputSearch.style.border = '2px solid green';
            // Clear any previous error message
            errorSearch.innerText = ''; 
            console.log(newGroupCardFilter.length + `${newGroupCardFilter.length < 2 ? ' resultado encontrado.' : ' resultados encontrados.'}`);
        } else {
            // Set red border for the search input indicating no results
            inputSearch.style.border = '2px solid red';
            // Display an error message 
            errorSearch.innerText = 'Por favor, digite o serviço corretamente!';
            // Update the content with a message indicating no results found
            groupCards.innerHTML = "Não foi encontrado o serviço especificado. Por favor, digite o nome completo do serviço."
            console.log(newGroupCardFilter.length + ' resultado encontrado.');
        }

        // Call a function to perform any cleanup tasks
        clean();
    }
)}

// Call the servicesSearch function on button click
servicesSearch()

//--------------------------------------------------------------
//Obs: utilizando o arquivo db.js como banco de dados, opção 2

/// (Comment assuming this line is executed externally)
/// Starts a json-server to mock an API endpoint at http://localhost:3000/services
///command: npx json-server src/db.json

/// Function to fetch all cards data from the API
// async function fetchData() {
//     try {
        /// Fetch data from the API endpoint
        // const response = await fetch('http://localhost:3000/services');
        /// Parse the response as JSON
        // const data = await response.json(); 

        /// Loop through each card in the fetched data
        // data.forEach(card => {
            /// Extract datas
            // const srcImg = card.image; 
            // const title = card.name; 
            // const description = card.description;  
            // const link = card.link; 
            // const category = card.category; 

            /// Build the HTML structure for each card
    //         groupCards.innerHTML += `
    //         <li class="card item-resultado">
    //             <img src=${srcImg} alt="service icon" />
    //             <h2>${title}</h2>
    //             <h3 class="descricao-meta">Description: ${description}</h3>
    //             <h3 class="descricao-meta">Category: ${category}</h3>
    //             <a href=${link} target="_blank">mais informações</a>
    //         </li>
    //         `;
            
    //     });
    // } catch (error) {
        /// Log any errors during data fetching
//         console.error('Erro ao buscar dados:', error); 
//     }
// }
/// Call the fetchData function to fetch initial data
// fetchData(); 

// function requestFetchSearch() {
    /// Add event listener to the search button for click event
    // buttonSearch.addEventListener('click', () => {

        /// Get the value from the search input and convert it to lowercase
        // let value = `${inputSearch.value}`;
        // value = value.toLowerCase();

        /// Initialize empty variables for storing converted data (lowercase)
        // let lowerName = '';
        // let lowerDescription = '';
        // let lowerCategory = '';
        // let lowerTags = '';

        /// Create an empty array to store filtered cards
        // let newGroupCardFilter = [];
        
        /// Async function to perform the search
        // async function fetchSearch() {
            /// Clear the existing content in the group cards container
            // groupCards.innerHTML = '';

            // try {
                /// Fetch data from the API endpoint
                // const response = await fetch(`http://localhost:3000/services`); 
                // const data = await response.json();

                /// Filter the data using the filter method
                // data.filter(card => {
                    /// Convert card properties (name, description, category) to lowercase for case-insensitive search
                    // lowerName = card.name.toLowerCase()
                    // lowerDescription = card.description.toLowerCase()
                    // lowerCategory = card.category.toLowerCase()
                    // lowerTags = card.tags.toLowerCase()
                    
                    /// Check if the search term is included in any of the converted properties (considering minimum length of 1 character)
                    // if ((lowerName.includes(value) && (value.length > 0)) || (lowerDescription.includes(value) && (value.length > 0)) || (lowerCategory.includes(value) && (value.length > 0)) || (lowerTags.includes(value) && (value.length > 0))) {
                    
                    /// Extract card details for displaying results
                    // let title = card.title; 
                    // let srcImg = card.image;
                    // title = card.name;
                    // let description = card.description;
                    // let link = card.link;
                    // let category = card.category;
                    
                    /// Build the HTML structure for each search result using template literals
                    // groupCards.innerHTML += ` 
                    // <li class="card item-resultado ">
                    //     <img src=${srcImg} alt="service icon" />
                    //     <h2>${title}</h2>
                    //     <h3 class="descricao-meta">Description: ${description}</h3>
                    //     <h3 class="descricao-meta">Category: ${category}</h3>
                    //     <a href=${link} target="_blank">mais informações</a>
                    // </li>
                    // `;
                    
                    /// Add the filtered card to the new array
                //     newGroupCardFilter.push(card);
                //     }                                             
                // });               
               
                /// Check if any results were found
                // if (newGroupCardFilter.length > 0) {
                    /// Set green border for the search input indicating successful search
                    // inputSearch.style.border = '2px solid green';
                    /// Clear any previous error message
                //     errorSearch.innerText = ''; 
                //     console.log(newGroupCardFilter.length + `${newGroupCardFilter.length < 2 ? ' resultado encontrado.' : ' resultados encontrados.'}`);
                // } else {
                    /// Set red border for the search input indicating no results
                    // inputSearch.style.border = '2px solid red'; 
                    /// Display an error message
                    // errorSearch.innerText = 'Por favor, digite o serviço corretamente!';
                    /// Update the content with a message indicating no results found
                //     groupCards.innerHTML = "Não foi encontrado o serviço especificado. Por favor, digite o nome completo do serviço."
                //     console.log(newGroupCardFilter.length + ' resultado encontrado.');
                // }

                /// Call a function to perform any cleanup tasks
        //         clean();
        //     } catch (error) {
        //         console.error('Erro ao buscar dados:', error); 
        //     }
        // }
        /// Call the fetchSearch function on button click
//         fetchSearch(); 
//     })
// }

// requestFetchSearch()
