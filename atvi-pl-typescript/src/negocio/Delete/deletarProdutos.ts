import Produto from "../../modelo/produto";
import Venda from "../../modelo/venda";
import Deletar from "./deletar";

export default class deletarProdutos extends Deletar {
    private produtos: Array<Produto>
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>, produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.vendas = vendas;
    }
    public deletar(produtoId: number): void {
        let produto = this.produtos.find(produtos => Number(produtos.id) === produtoId)
        if (produto == undefined){
            console.log(`Produto não encontrado`);
            return;
        }
        this.vendas.forEach(venda => {
            venda.itens.filter(item => item.elemento === produto)
                .forEach(item => {
                    item.elemento.consumoTotal -= item.qty;
                    for (let i = 1; i <= item.qty; i++) venda.cliente.deleteProdutoConsumido(item.elemento);
                    venda.itens.splice(venda.itens.indexOf(item), 1);
                });
        });
        this.produtos.splice(this.produtos.indexOf(produto), 1)
        console.log(`Produto deletado com sucesso`);
        console.log(`\n`);
    }
}

