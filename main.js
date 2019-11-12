const search = document.getElementById('search');
const resultsDiv = document.getElementById('resultsDiv');
const form = document.getElementById('form');
const accessKey = '5bf078aee6fe787c6c50212e973282ee43159d44d2d04b5a4b3a964560f772c2';

form.addEventListener('submit', loadData);

async function loadData(e) {
    e.preventDefault();

    const response = await fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${search.value}&orientation=landscape&client_id=${accessKey}`);

    const data = await response.json();

        resultsDiv.innerHTML = `
            <img src=${data.results[0].urls.full} />
            <img src=${data.results[1].urls.full} />
            <img src=${data.results[2].urls.full} />
            <img src=${data.results[3].urls.full} />
            <img src=${data.results[4].urls.full} />
            <img src=${data.results[5].urls.full} />
            <img src=${data.results[6].urls.full} />
            <img src=${data.results[7].urls.full} />
            <img src=${data.results[8].urls.full} />
            <img src=${data.results[9].urls.full} />
        `;
}

