var listElement = document.querySelector('#app ul');
var jobElement = document.querySelector('#app #job');
var timeElement = document.querySelector('#app #time');
var buttonElement = document.querySelector('#app button');

var works = JSON.parse(localStorage.getItem('listWorks')) || [];

renderFazeres()
buttonElement.onclick = addTarefa

function addNewJob() {
    var newJob = jobElement.value + timeElement.value;
    works.push(newJob);
    jobElement = '';
    timeElement = '';
    function saveListWorks();
    function renderWorks();
}

function deleteJob(pos) {
    works.slice(pos, 1);
    function saveListWorks();
    function renderWorks();
}

function saveListWorks() {
    localStorage.setItem('listWorks', JSON.stringify(works));
}

function renderWorks() {
    listElement.innerHTML = '';

    for(const [pos, job] of works.entries()){
        var jobElement = document.createElement('li');
        var jobText = document.createTextNode(job, time);
        jobElement.appendChild(jobText);

        var btElement = document.createElement('button');
        var buttonText = document.createTextNode('Excluir');
        btElement.appendChild(buttonText);
        btElement.setAttribute('onclick', 'deletejob('+ pos +')');

        jobElement.appendChild(btElement);
        listElement.appendChild(jobElement);
    }
}
