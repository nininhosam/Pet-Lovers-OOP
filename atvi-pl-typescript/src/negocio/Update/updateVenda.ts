import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Venda from "../../modelo/venda";
import Update from "./update";

export default class UpdateVenda extends Update {
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
    public update(): void {
        console.log(`\nAtualizando a venda:`);
        let id = this.entrada.receberNumero(`Por favor informe o id da venda a ser atualizada: `);
        let venda = this.vendas.find(venda => venda.id == id)
        if (venda == null) {
            console.log(`\nVenda não encontrada :(`);
            return
        }
        console.log(`\nOpções:`)
        console.log(`1 - Cliente`)
        console.log(`2 - Pet`)
        console.log(`0 - Cancelar`)
        let opcao = this.entrada.receberNumero(`Por favor informe o que deseja atualizar: `)
        switch (opcao) {
            case 1:
                let cpfVal = this.entrada.receberTexto(`Por favor informe o cpf do cliente correto: `)
                let cliente = this.clientes.find(cliente => cliente.getCpf.getValor == cpfVal)
                if (cliente == null) {
                    console.log(`\nCliente não encontrado :(`);
                    return
                }
                venda.cliente = cliente;
                break
            case 2:
                let petId = this.entrada.receberNumero(`Por favor informe o id do pet correto: `)
                let pet = venda.cliente.getPets.find(pet => pet.getId == petId)
                if (pet == undefined) {
                    console.log(`Pet não encontrado :(`)
                    return
                }
                venda.pet = pet;
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

