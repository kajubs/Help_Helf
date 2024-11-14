const adicionar = document.getElementById('adicionar')
const itemadicionar = document.getElementById('item-adicionar')

adicionar.addEventListener('click', function(){
    const listaescolhas = document.getElementById('lista-escolhas')

    let elementoLista = document.createElement('li')
    elementoLista.textContent = itemadicionar.value

    listaescolhas.appendChild(elementoLista)

    texto.value = ''
})