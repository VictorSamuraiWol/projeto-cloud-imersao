const groupCards = document.querySelector('#group-cards');
const card = document.querySelectorAll('.card');
const inputSearch = document.querySelector('#input-search');
const buttonSearch = document.querySelector('#button-search');
const errorSearch = document.querySelector('#error-search');
const rightToogle = document.querySelector('#right-toogle');
const leftToogle = document.querySelector('#left-toogle');
const body = document.querySelector('body');
const sectionInput = document.querySelector('section input');
const titleH1 = document.querySelector('main h1');

console.log(groupCards, card, inputSearch, buttonSearch, errorSearch, rightToogle, leftToogle, sectionInput, titleH1)

leftToogle.addEventListener('click', () => {
    leftToogle.style.display = 'none';
    rightToogle.style.display = 'flex';
    body.style.backgroundImage = 'url("https://d2908q01vomqb2.cloudfront.net/ca3512f4dfa95a03169c5a670a4c91a19b3077b4/2021/07/01/AdobeStock_413469330_cloud-computing-connection.png")';
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

//npx json-server src/db.json (http://localhost:3000/services)
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
            const category = card.category;

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
                const category = card.category;

                if (value.length > 0) {
                groupCards.innerHTML = `
                <li class="card item-resultado ">
                    <img src=${srcImg} alt="service icon" />
                    <h2>${title}</h2>
                    <h3 class="descricao-meta">Description: ${description}</h3>
                    <h3 class="descricao-meta">Category: ${category}</h3>
                    <a href=${link} target="_blank">mais informações</a>
                </li>
                `;
                }
            });                

            //validação
            if (value === title) {
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
