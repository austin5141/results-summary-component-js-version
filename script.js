let maindivs = document.querySelectorAll('.summaryContent')
let divNumber = 0;

function renderSummary(summary) {
    summary.forEach(object => {   
        const icondiv = document.createElement('div');
        const iconimg = document.createElement('img');
        const heading = document.createElement('h3')
        const results = document.createElement('p')

        icondiv.classList = 'icon';
        iconimg.src = object.icon;
        icondiv.appendChild(iconimg);

        heading.innerText = `${object.category}`
        heading.id = `${object.category}Heading`

        results.innerHTML = `<strong>${object.score}</strong> / 100`

        maindivs[divNumber].appendChild(icondiv);
        maindivs[divNumber].appendChild(heading);
        maindivs[divNumber].appendChild(results)

        divNumber = divNumber + 1;
    })
}

fetch('data.json')
    .then(response => response.json())
    .then(object => {
        renderSummary(object)
    })