import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Update from "./update";

export default class UpdatePet extends Update {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nAtualizando um pet:`);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf do dono: `);
        let dono = this.clientes.find(cliente => cliente.getCpf.getValor == valor)
        if (dono == null) {
            console.log(`\nCliente não encontrado :(`);
            return
        }

        let petId = this.entrada.receberNumero(`Por favor informe o id do pet: `)
        let pet = dono.getPets.find(pet => pet.getId == petId)
        if (pet == undefined) {
            console.log(`Pet não encontrado :(`)
            return
        }

        console.log(`\nOpções:`)
        console.log(`1 - Nome`)
        console.log(`2 - Tipo`)
        console.log(`3 - Raça`)
        console.log(`4 - Genero`)
        console.log(`0 - Cancelar`)
        let opcao = this.entrada.receberNumero(`Por favor informe o que deseja atualizar: `)
        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto(`Por favor informe o nome atualizado do pet: `)
                pet.setNome(nome)
                break
            case 2:
                let tipo = this.entrada.receberTexto(`Por favor informe o tipo atualizado do pet: `)
                pet.setTipo(tipo)
                break
            case 3:
                let raca = this.entrada.receberTexto(`Por favor informe a raça atualizada do pet: `);
                pet.setRaca(raca)
                break
            case 4:
                let invalido = (genero: string) => genero != "M" && genero != "F"
                let genero;
                do {
                    genero = this.entrada.receberTexto(`Por favor informe o gênero atualizado do pet (M/F): `).toUpperCase()
                    if (invalido(genero)) console.log("Gênero inválido")
                } while (invalido(genero))
                
                pet.setGenero(genero)
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

