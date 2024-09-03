const groupCards = document.querySelector('#group-cards')
const card = document.querySelectorAll('.card')
const inputSearch = document.querySelector('#input-search')
const buttonSearch = document.querySelector('#button-search')
const errorSearch = document.querySelector('#error-search')

console.log(groupCards, card, inputSearch, buttonSearch)

//requisição de todos os cards da API
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/services');
        const data = await response.json();

        data.forEach(card => {
            const title = card.name;
            groupCards.innerHTML += `
            <li class="card">
                <img src='' alt="service icon" />
                <h2>Title: ${title}</h2>
                <h3>Description:</h3>
            </li>
            `;
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchData();

//requição quando o botão procurar for clicado
buttonSearch.addEventListener('click', () => {
    let value = `${inputSearch.value}`;
    async function fetchSearch() {
        // let value = 'Cloudwatch';
        try {
            const response = await fetch(`http://localhost:3000/services?name=${value}`);
            const data = await response.json();
            let title; //trazendo a variável para fora
            data.forEach(card => {
                title = card.name;
                groupCards.innerHTML = `
                <img src='' alt="service icon" />
                <h2>Title: ${title}</h2>
                <h3>Description:</h3>
                `;
            });

            if (value == title) {
                inputSearch.style.borderColor = 'green'
                errorSearch.innerText = ''
            } else {
                inputSearch.style.borderColor = 'red';
                errorSearch.innerText = 'Por favor, digite o serviço corretamente!'
            }

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    fetchSearch();
})

