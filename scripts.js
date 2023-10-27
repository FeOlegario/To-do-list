const button = document.querySelector('.button-add-task'); // isso faz com que pegue a classe de dentro do arquivo html, no caso ela pega o botão
const input = document.querySelector('.input-task'); // essa pega o que está no input
const listaCompleta = document.querySelector('.list-taks');

let minhaListaDeItem = []  // isso é uma variavel que cria uma lista, o let diferente do 'const' ela é varialvel, já o 'const' não.


// essa função vai pegar o valor do input (input,value) e carregar para lista (minhaListaDeItem.push)
function adicionaarNovaTarefa() {
    minhaListaDeItem.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = '' // esse valor vai ser vazio, para que o input seja limpo.

    mostrarTarefas()
}

/* essa função irá chamar um alerta caso a pessoa tente adicionar  uma tarfa
somente com espaço ou não coloque nada*/
function vazio(){
    alert('Campo vazio ou com espaço')
}

/*Essa função, será um teste lógico para realizar ou não a entrada de uma nova
tarefa*/
function tarefaVaziaOuNao(){
    const inputValue = input.value.trim() // método trim() é usado para remover espaços em branco do início e do final do valor inserido no campo de entrada

    if(inputValue == ''){
        vazio();
    }else{
        adicionaarNovaTarefa()
}}


function mostrarTarefas(){
    
    let novaLi = ''
    
    minhaListaDeItem.forEach( (item, posicao) => {

        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
            <img src="./img/confirme.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/excluir.png" alt="tarefa-o-lixo" onclick="deletarTarefa(${posicao})">
        </li>
        
        
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItem))
}



function concluirTarefa(posicao) {
    minhaListaDeItem[posicao].concluida = !minhaListaDeItem[posicao].concluida 

    mostrarTarefas()

}

function deletarTarefa(posicao){
    minhaListaDeItem.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefaDolocalStorage = localStorage.getItem('lista')

    if(tarefaDolocalStorage) {
    minhaListaDeItem = JSON.parse(tarefaDolocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', tarefaVaziaOuNao) // esse addEventListener, ele fica "vigindo" uma ação de click no botão
