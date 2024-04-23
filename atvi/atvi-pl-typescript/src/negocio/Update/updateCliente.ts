import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Update from "./update";

export default class UpdateCliente extends Update {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nAtualizando o cliente:`);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente a ser atualizado: `);
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor == valor)
        if (cliente == null) {
            console.log(`\nCliente não encontrado :(`);
            return
        }
        console.log(`\nOpções:`)
        console.log(`1 - Nome`)
        console.log(`2 - Nome Social`)
        console.log(`3 - CPF`)
        console.log(`4 - RG`)
        console.log(`5 - Telefones`)
        console.log(`0 - Cancelar`)
        let opcao = this.entrada.receberNumero(`Por favor informe o que deseja atualizar: `)
        let opc2: number;
        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                cliente.nome = nome;
                break
            case 2:
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                cliente.nomeSocial = nomeSocial;
                break
            case 3:
                let newValor = this.entrada.receberTexto(`Por favor informe o número novo do cpf: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let cpf = new CPF(newValor, dataEmissao);
                cliente.setCpf(cpf);
                break
            case 4:
                console.log(`1 - Adicionar RG`)
                console.log(`2 - Remover RG`)
                console.log(`0 - Cancelar`)
                opc2 = this.entrada.receberNumero(`Por favor informe o que deseja fazer: `)
                switch (opc2) {
                    case 1:
                        let valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
                        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
                        let partesData = data.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        cliente.getRgs.push(new RG(valor, dataEmissao))
                        break
                    case 2: 
                        let delRg = this.entrada.receberTexto(`Por favor informe o número do rg a ser removido: `);
                        cliente.setRgs(cliente.getRgs.filter(rg => rg.getValor != delRg))
                        break
                    case 0: 
                        break;
                    default:
                        console.log("Opção inválida")
                        break
                }
                break
            case 5:
                console.log(`1 - Adicionar telefone`)
                console.log(`2 - Remover telefone`)
                console.log(`0 - Cancelar`)
                opc2 = this.entrada.receberNumero(`Por favor informe o que deseja fazer: `)
                switch (opc2) {
                    case 1:
                        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
                        let ddd = this.entrada.receberTexto(`Por favor informe o ddd do telefone: `);
                        cliente.getTelefones.push(new Telefone(ddd, numero))
                        break
                    case 2:
                        let delNumero = this.entrada.receberTexto(`Por favor informe o número do telefone a ser removido: `);
                        cliente.setTelefones(cliente.getTelefones.filter(telefone => telefone.getNumero != delNumero));
                        break
                    case 0: 
                        break;
                    default:
                        console.log("Opção inválida")
                        break
                }
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

