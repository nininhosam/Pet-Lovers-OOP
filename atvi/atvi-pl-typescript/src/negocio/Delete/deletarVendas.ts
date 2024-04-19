import Venda from "../../modelo/venda";
import Deletar from "./deletar";

export default class deletarVendas extends Deletar {
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
    }
    public deletar(vendaId: number): void {
        let vendas = this.vendas.find(vendas => Number(vendas.id) === vendaId)
        if (vendas == undefined){
            console.log(`Venda não encontrada`);
            return;
        }
        this.vendas.splice(this.vendas.indexOf(vendas), 1)
        console.log(`Venda deletada com sucesso`);
        console.log(`\n`);
    }
}

