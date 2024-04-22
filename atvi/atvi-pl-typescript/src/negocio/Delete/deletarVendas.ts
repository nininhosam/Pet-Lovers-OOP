import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Venda from "../../modelo/venda";
import Deletar from "./deletar";

export default class deletarVendas extends Deletar {
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
    }
    public deletar(vendaId: number): void {
        let venda = this.vendas.find(vendas => Number(vendas.id) === vendaId)
        if (venda == undefined){
            console.log(`Venda não encontrada`);
            return;
        }
        venda.itens.forEach(item => {
            item.elemento.consumoTotal -= item.qty;
            if (item.elemento instanceof Produto) {
                for (let i = 1; i <= item.qty; i++) venda.cliente.deleteProdutoConsumido(item.elemento);
            } else if (item.elemento instanceof Servico) {
                for (let i = 1; i <= item.qty; i++) venda.cliente.deleteServicoConsumido(item.elemento);
            }
        });
        this.vendas.splice(this.vendas.indexOf(venda), 1)
        console.log(`Venda deletada com sucesso`);
        console.log(`\n`);
    }
}

