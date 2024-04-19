import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servico => {
            console.log(`Serviço #` + servico.id);
            console.log(`Nome: ` + servico.nome);
            console.log(`Preco: R$` + servico.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    
    public listarPorConsumoQty(): void {
        console.log(`\nLista de Serviços por consumo (quantidade):`);
        let ServicosByQty = this.servicos.sort((a, b) => {
            return b.consumoTotal - a.consumoTotal
        })
        ServicosByQty.forEach(servico => {
            console.log(`Serviço #` + servico.id);
            console.log(`Nome: ` + servico.nome);
            console.log(`Preco: R$` + servico.preco);
            console.log(`Unidades consumidas: ` + servico.consumoTotal);
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