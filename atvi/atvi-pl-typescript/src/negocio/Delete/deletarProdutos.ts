import Produto from "../../modelo/produto";
import Deletar from "./deletar";

export default class deletarProdutos extends Deletar {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public deletar(produtoId: number): void {
        let produtos = this.produtos.find(produtos => Number(produtos.id) === produtoId)
        if (produtos == undefined){
            console.log(`Produto não encontrado`);
            return;
        }
        this.produtos.splice(this.produtos.indexOf(produtos), 1)
        console.log(`Produto deletado com sucesso`);
        console.log(`\n`);
    }
}

