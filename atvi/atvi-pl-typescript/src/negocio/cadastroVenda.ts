import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"
import Venda from "../modelo/venda"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private vendas: Array<Venda>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>, vendas: Array<Venda>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.vendas = vendas;
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de venda`);
        let cpfCliente = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor == cpfCliente)
        if (cliente == undefined) {
            console.log(`Cliente não encontrado :(`)
            return
        }
        let idProduto = this.entrada.receberNumero(`Por favor informe o ID do produto: `)
        let qtdProduto = this.entrada.receberNumero(`Por favor informe a quantidade do produto desejado: `)
        let venda = new Venda();
        this.vendas.push(venda)
        console.log(`\nCadastro concluído :)\n`);
    }
}