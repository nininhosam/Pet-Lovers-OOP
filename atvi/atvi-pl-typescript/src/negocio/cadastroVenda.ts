import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Item from "../modelo/item"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"
import Venda from "../modelo/venda"
import Cadastro from "./cadastro"

export default class CadastroVenda extends Cadastro {
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
        let adicionandoItens = true;
        let itens: Array<Item> = [];
        
        // Buscando cliente
        let cpfCliente = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor == cpfCliente)
        if (cliente == undefined) {
            console.log(`Cliente não encontrado :(`)
            return
        }
        // Adicionando itens
        while (adicionandoItens) {
            console.log(`Opções:`);
            console.log(`1 - Produto`);
            console.log(`2 - Servico`);
            let tipoItem = this.entrada.receberNumero(`Por favor informe o tipo do item: `)
            if (tipoItem != 1 && tipoItem != 2) {
                console.log(`Tipo de item não reconhecido :(`)
                return
            }
            let idItem = this.entrada.receberNumero(`Por favor informe o ID do item: `)
            let qtdItem = this.entrada.receberNumero(`Por favor informe a quantidade do item desejado: `)
            let itemElement = tipoItem == 1 ? this.produtos.find(produto => produto.id == idItem) : this.servicos.find(servico => servico.id == idItem) 
            if (itemElement == undefined) {
                console.log(`Item não encontrado :(`)
                return
            }
            let item = new Item(qtdItem, itemElement);
            itens.push(item);
            console.log(`Item adicionado com sucesso!`);
            if (this.entrada.receberTexto(`Deseja adicionar mais algo? (S/N)`) !== 'S'){
                adicionandoItens = false;
            };
            
        }
        // Associando pet
        let petRefId = this.entrada.receberNumero(`Por favor informe o ID do pet associado a essa compra: `)
        let petRef = cliente.getPets.find(pet => pet.getId == petRefId)
        if (petRef == undefined) {
            console.log(`Pet não encontrado :(`)
            return
        }
        // Criando venda
        let venda = new Venda(cliente, petRef, itens);
        this.vendas.push(venda)
        console.log(`\nCadastro concluído :)\n`);
    }
}