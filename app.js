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
            const srcImg = card.image;
            const title = card.name;
            const description = card.description;
            const link = card.link;

            groupCards.innerHTML += `
            <li class="card item-resultado ">
                <img src=${srcImg} alt="service icon" />
                <h2>${title}</h2>
                <h3 class="descricao-meta">Description: ${description}</h3>
                <a href=${link} target="_blank">mais informações</a>
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
        try {
            const response = await fetch(`http://localhost:3000/services?name=${value}`);
            const data = await response.json();
            let title = ""; //trazendo a variável para fora
            data.forEach(card => {
                let srcImg = card.image;
                title = card.name;
                let description = card.description;
                let link = card.link;

                if (value.length > 0) {
                groupCards.innerHTML = `
                <li class="card item-resultado ">
                    <img src=${srcImg} alt="service icon" />
                    <h2>${title}</h2>
                    <h3 class="descricao-meta">Description: ${description}</h3>
                    <a href=${link} target="_blank">mais informações</a>
                </li>
                `;
                }
            });                

            //validação
            if (value == title) {
                inputSearch.style.border = '2px solid green';
                errorSearch.innerText = '';
            } else {
                inputSearch.style.border = '2px solid red';
                errorSearch.innerText = 'Por favor, digite o serviço corretamente!';
            } 
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    fetchSearch();
})
