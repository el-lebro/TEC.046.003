let produtos = [];

const formulario = document.getElementById("formProduto");

formulario.addEventListener("submit", cadastrarProduto);

function cadastrarProduto(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    let produto = {
        nome,
        categoria,
        quantidade,
        preco
    };

    produtos.push(produto);

    const tabela = document.getElementById("tabelaProdutos");

    tabela.innerHTML = ``;

    produtos.forEach(produto => {
        tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preco}</td>
                <td><a href="#">Excluir</a></td>
            </tr>
        `;
    });

    formulario.reset();
}