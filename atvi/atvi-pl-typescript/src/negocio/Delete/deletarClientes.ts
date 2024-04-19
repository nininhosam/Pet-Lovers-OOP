import Cliente from "../../modelo/cliente";
import Deletar from "./deletar";

export default class deletarClientes extends Deletar {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public deletar(clienteCpfValue: number): void {
        let cliente = this.clientes.find(cliente => Number(cliente.getCpf.getValor) === clienteCpfValue)
        if (cliente == undefined){
            console.log(`Cliente não encontrado`);
            return;
        }
        this.clientes.splice(this.clientes.indexOf(cliente), 1)
        console.log(`Cliente deletado com sucesso`);
        console.log(`\n`);
    }
}

