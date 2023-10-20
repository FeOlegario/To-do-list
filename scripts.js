const button = document.querySelector('.button-add-task'); // isso faz com que pegue a classe de dentro do arquivo html, no caso ela pega o botão
const input = document.querySelector('.input-task'); // essa pega o que está no input
const listaCompleta = document.querySelector('.list-taks');

let minhaListaDeItem = []  // isso é uma variavel que cria uma lista, o let diferente do 'const' ela é varialvel, já o 'const' não.


// essa função vai pegar o valor do input (input,value) e carregar para lista (minhaListaDeItem.push)
function adicionarNovaTarefa(){
    minhaListaDeItem.push(input.value);

    input.value = '' // esse valor vai ser vazio, para que o input seja limpo.

} 



function mostrarTarefa(){
    let novaLi = ''
    minhaListaDeItem.forEach(( tarefa ) => {
        novaLi = novaLi + `
        <li class="task">
            <img src="./img/confirme.png" alt="check-na-tarefa">
            <p>${tarefa}</p>
            <img src="./img/excluir.png" alt="tarefa-o-lixo">
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

}


button.addEventListener('click', adicionarNovaTarefa) // esse addEventListener, ele fica "vigindo" uma ação de click no botão


