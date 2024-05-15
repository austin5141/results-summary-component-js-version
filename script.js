let maindiv = document.querySelector('.summaryResults')

function renderSummary(summary) {
    summary.forEach(object => {   
        const boxdiv = document.createElement('div')
        const icondiv = document.createElement('div');
        const iconimg = document.createElement('img');
        const heading = document.createElement('h3')
        const results = document.createElement('p')

        boxdiv.classList = 'summaryContent'
        icondiv.classList = 'icon';

        iconimg.src = object.icon;
        icondiv.appendChild(iconimg);

        heading.innerText = `${object.category}`
        heading.id = `${object.category}Heading`

        results.innerHTML = `<strong>${object.score}</strong> / 100`

        maindiv.appendChild(boxdiv)
        boxdiv.appendChild(icondiv);
        boxdiv.appendChild(heading);
        boxdiv.appendChild(results)
    })
}

fetch('data.json')
    .then(response => response.json())
    .then(object => {
        renderSummary(object)
    })