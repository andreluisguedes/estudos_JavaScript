var listElement = document.querySelector('#app ul');
var jobElement = document.querySelector('#app #job');
var timeElement = document.querySelector('#app #time');
var buttonElement = document.querySelector('#app button');

var works = JSON.parse(localStorage.getItem('listWorks')) || [];

renderWorks()
buttonElement.onclick = addNewJob

function addNewJob() {
    var newJob = jobElement.value + ' - ' + timeElement.value;
    works.push(newJob);
    jobElement.value = '';
    timeElement.value = '';
    saveListWorks();
    renderWorks();
}

function deleteJob(pos) {
    works.splice(pos, 1);
    saveListWorks();
    renderWorks();
}

function saveListWorks() {
    localStorage.setItem('listWorks', JSON.stringify(works));
}

function renderWorks() {
    listElement.innerHTML = '';

    for(const [pos, job] of works.entries()){
        var jobElement = document.createElement('li');
        var jobText = document.createTextNode(job);
        jobElement.appendChild(jobText);

        var btElement = document.createElement('button');
        var buttonText = document.createTextNode('Excluir');
        btElement.appendChild(buttonText);
        btElement.setAttribute('onclick', 'deleteJob('+ pos +')');

        jobElement.appendChild(btElement);
        listElement.appendChild(jobElement);
    }
}
