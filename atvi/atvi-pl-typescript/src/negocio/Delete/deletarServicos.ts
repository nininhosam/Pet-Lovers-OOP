import Servico from "../../modelo/servico";
import Deletar from "./deletar";

export default class deletarServicos extends Deletar {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public deletar(servicoId: number): void {
        let servicos = this.servicos.find(servicos => Number(servicos.id) === servicoId)
        if (servicos == undefined){
            console.log(`Servico não encontrado`);
            return;
        }
        this.servicos.splice(this.servicos.indexOf(servicos), 1)
        console.log(`Servico deletado com sucesso`);
        console.log(`\n`);
    }
}

