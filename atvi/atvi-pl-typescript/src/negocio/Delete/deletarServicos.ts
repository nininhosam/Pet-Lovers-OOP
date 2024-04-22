import Servico from "../../modelo/servico";
import Venda from "../../modelo/venda";
import Deletar from "./deletar";

export default class deletarServicos extends Deletar {
    private servicos: Array<Servico>
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>, servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.vendas = vendas;
    }
    public deletar(servicoId: number): void {
        let servico = this.servicos.find(servicos => Number(servicos.id) === servicoId)
        if (servico == undefined){
            console.log(`Servico não encontrado`);
            return;
        }
        this.vendas.forEach(venda => {
            venda.itens.filter(item => item.elemento === servico)
                .forEach(item => {
                    item.elemento.consumoTotal -= item.qty;
                    for (let i = 1; i <= item.qty; i++) venda.cliente.deleteServicoConsumido(item.elemento);
                    venda.itens.splice(venda.itens.indexOf(item), 1);
                });
            if (venda.itens.length == 0) {
                this.vendas.splice(this.vendas.indexOf(venda), 1);
            }
        });
        this.servicos.splice(this.servicos.indexOf(servico), 1)
        console.log(`Servico deletado com sucesso`);
        console.log(`\n`);
    }
}

