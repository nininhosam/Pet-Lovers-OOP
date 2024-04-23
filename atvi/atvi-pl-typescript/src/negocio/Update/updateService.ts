import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "./update";

export default class UpdateServico extends Update {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nAtualizando o serviço:`);
        let id = this.entrada.receberNumero(`Por favor informe o id do serviço a ser atualizado: `);
        let servico = this.servico.find(servico => servico.id == id)
        if (servico == null) {
            console.log(`\nServiço não encontrado :(`);
            return
        }
        console.log(`\nOpções:`)
        console.log(`1 - Nome`)
        console.log(`2 - Preço`)
        console.log(`0 - Cancelar`)
        let opcao = this.entrada.receberNumero(`Por favor informe o que deseja atualizar: `)
        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
                servico.nome = nome;
                break
            case 2:
                let preco = this.entrada.receberNumero(`Por favor informe o novo preço do serviço: `)
                servico.preco = preco;
                break
            case 0: 
                break;
            default:
                console.log("Opção inválida")
                break
        }
        console.log(`\nAtualização concluída :)\n`);

        console.log(`\n`);
    }
}

