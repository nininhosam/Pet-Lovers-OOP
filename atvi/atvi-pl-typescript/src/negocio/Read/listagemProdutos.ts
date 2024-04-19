import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Produto #` + produto.id);
            console.log(`Nome: ` + produto.nome);
            console.log(`Preco: R$` + produto.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarPorConsumoQty(): void {
        console.log(`\nLista de produtos por consumo (quantidade):`);
        let ProdutosByQty = this.produtos.sort((a, b) => {
            return b.consumoTotal - a.consumoTotal
        })
        ProdutosByQty.forEach(produto => {
            console.log(`Produto #` + produto.id);
            console.log(`Nome: ` + produto.nome);
            console.log(`Preco: R$` + produto.preco);
            console.log(`Unidades consumidas: ` + produto.consumoTotal);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarPorConsumoTipo(): void {
        // TODO
        console.log(`Método não implementado :(`)
    }
    public listarPorConsumoRaca(): void {
        // TODO
        console.log(`Método não implementado :(`)
    }
}