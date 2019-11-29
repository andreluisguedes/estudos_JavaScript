var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var fazeres = [              Desse modo, ficará sempre uma lista fixa.
//     'Preparar café',
//     'Agoar as plantas',
//     'Tomar banho'
// ]

var fazeres = JSON.parse(localStorage.getItem('listTarefas')) || [];    //Chama a função localStogare ou mantem a lista null

function renderFazeres() {      //Function que renderiza a lista de fazeres
    listElement.innerHTML = '';     //zera o html antes de renderizar para não renderizar duas vezes a mesma lista
    
    for (const [pos, tarefa] of fazeres.entries()){     //Laço que verifica cada ítem da 'ul'
                                                        // A função entries transforma cada item do array num
                                                        // array de dois ítens: a posição e o elemento. 

        var tarefaElement = document.createElement('li');   //cria um elemento 'li'
        var tarefaText = document.createTextNode(tarefa);   //cria o texto atribuído ao elemento do array acima
        tarefaElement.appendChild(tarefaText)               //'Linka' o texto ao item 'li'

        var linkElement = document.createElement('button'); //cria o elemento 'button'
        var linkText = document.createTextNode('Excluir');  //Inclui o texto 'Excluir' ao botão
        linkElement.appendChild(linkText);                  //'Linka' o texto 'Excluir' ao elemento 'button'

        linkElement.setAttribute('onclick', 'excluirTarefa('+ pos +')') //Aciona a function 'excluirTarefa' informando 
                                                                        //a posição do elemento quando o button é clicado
        
        tarefaElement.appendChild(linkElement)  //'Linka' o button ao elemento 'li'

        listElement.appendChild(tarefaElement)  //'Linka' o elemento 'li' a 'ul'
    }
}

renderFazeres();    //Aciona a function qu renderiza a lista de tarefas

function addTarefa() {      //function responsável por adicionar ítens a 'ul'
    var tarefaText = inputElement.value;    //Atribui o texto digitado no placeholder a variável tarefaText

    fazeres.push(tarefaText);   //Incrementa a variável tarefaText a lista de fazeres
    inputElement.value = '';    //Limpa o placeholde
    renderFazeres();            //Aciona a function para renderizar a 'ul'
    saveFazeres();              //Aciona a function que salva a 'ul'
}

buttonElement.onclick = addTarefa   //Aciona a function para adicionar tarefas quando o button é clicado

function excluirTarefa(pos) {   //Function responsável por excluir 'li' da 'ul' através da pos do array
    fazeres.splice(pos, 1);     //Responsável por apagar o 'li' pela pos no array
    renderFazeres();            //Aciona a function para renderizar a 'ul'
    saveFazeres();              //Aciona a function que salva a 'ul'
}

function saveFazeres() {        //Function que salva as 'li'
    localStorage.setItem('listTarefas', JSON.stringify(fazeres));   //Coverte o array em string com chave-elemento 
}                                                                   //e 'seta' tudo no localStorage
