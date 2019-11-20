var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var fazeres = [
    'Preparar café',
    'Agoar as plantas',
    'Tomar banho'
]

function renderFazeres() {
    listElement.innerHTML = '';
    
    for (const [pos, tarefa] of fazeres.entries()){
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);

        var linkElement = document.createElement('button');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText)
        
        linkElement.setAttribute('onclick', 'excluirTarefa('+ pos +')')

        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)

        listElement.appendChild(tarefaElement)
    }
}

renderFazeres();

function addTarefa() {
    var tarefaText = inputElement.value;

    fazeres.push(tarefaText);
    inputElement.value = '';
    renderFazeres();
}

buttonElement.onclick = addTarefa

function excluirTarefa(pos) {
    fazeres.splice(pos, 1);
    renderFazeres();
}