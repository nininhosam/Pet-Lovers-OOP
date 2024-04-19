import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "./deletar";

export default class deletarPet extends Deletar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada()
        this.clientes = clientes
    }
    public deletar(cpfDono: string): void {
        
        let dono = this.clientes.find(cliente => cliente.getCpf.getValor == cpfDono)
        if (dono == undefined) {
            console.log(`Cliente não encontrado :(`)
            return
        }

        let petId = this.entrada.receberNumero(`Por favor informe o id do pet: `)
        let pet = dono.getPets.find(pet => pet.getId == petId)
        if (pet == undefined) {
            console.log(`Pet não encontrado :(`)
            return
        }
        dono.delPet(pet)

        console.log(`Pet deletado com sucesso`);
        console.log(`\n`);
    }
}

