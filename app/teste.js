
// Método reduce()

// function calcularValorTotalDeLivrosDisponiveis(livros) {
//     return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
// }

// --------------------------------------------------------------------------------------

// Método sort()

// const btn = document.getElementById('btnOrdenarPorPreco')

// btn.addEventListener('click', ordernarLivrosPorPreco)

// function ordernarLivrosPorPreco() {
//     const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    
//     exibirOsLivrosNaTela(livrosOrdenados)
// }

// --------------------------------------------------------------------------------------

// Método filter()

// const botoes = document.querySelectorAll('.btn')

// botoes.forEach(botao => {
//     botao.addEventListener('click', filtrarLivros)
// })

// function filtrarLivros() {
//     const elementoBtn = document.getElementById(this.id)
//     const categoria = elementoBtn.value

//     let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)

//     console.table(livrosFiltrados)

// }

// --------------------------------------------------------------------------------------

// Ordenação estável

// let precos = [1,52,6,78.56,100,24]

// let precosOrdenados = precos.sort((a, b) => b - a)

// console.log(precosOrdenados)


// --------------------------------------------------------------------------------------

// Método map()

// function aplicarDesconto(livros) {
//     const desc = 0.4
//     const livrosComDesconto = livros.map(livro => {
//         return {...livro, preco: livro.preco - (livro.preco * desc)}  
//     })

//     return livrosComDesconto
// }

// --------------------------------------------------------------------------------------

// Método forEach

/*let books = []

const req = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

listarLivros()

const elemento = document.getElementById('livros')

async function listarLivros() {
    const resp = await fetch(req)
    books = await resp.json()

    console.log(books)
    inserirLivros(books)
}

function inserirLivros(livros) {
    livros.forEach(livro => {
        elemento.innerHTML += `<div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>`
    });
}*/

