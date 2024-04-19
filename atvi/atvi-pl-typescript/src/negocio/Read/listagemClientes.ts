import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";
import ListagemPets from "./listagemPets";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            let listagem = new ListagemPets(cliente.getPets)
            listagem.listar()
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarTop10ConsumoQty(): void {
        console.log(`\nTop 10 clientes por consumo (quantidade):`);
        let clientesByQty = this.clientes.sort((a, b) => {
            return b.getConsumoQty - a.getConsumoQty
        })
        clientesByQty = clientesByQty.slice(0, 10)
        clientesByQty.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Produtos/Serviços comprados: ` + cliente.getConsumoQty);
            let listagem = new ListagemPets(cliente.getPets)
            listagem.listar()
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarTop5ConsumoValor(): void {
        console.log(`\nTop 5 clientes por consumo (R$):`);
        let clientesByVal = this.clientes.sort((a, b) => {
            return b.getConsumoValor - a.getConsumoValor
        })
        clientesByVal = clientesByVal.slice(0, 5)
        clientesByVal.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Valor total gasto: ` + cliente.getConsumoValor);
            let listagem = new ListagemPets(cliente.getPets)
            listagem.listar()
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}

