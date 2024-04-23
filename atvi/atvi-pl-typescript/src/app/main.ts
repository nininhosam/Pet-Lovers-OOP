import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cadastro from "../negocio/Create/cadastro";
import CadastroCliente from "../negocio/Create/cadastroCliente";
import CadastroPet from "../negocio/Create/cadastroPet";
import CadastroProduto from "../negocio/Create/cadastroProduto";
import CadastroServico from "../negocio/Create/cadastroServico";
import CadastroVenda from "../negocio/Create/cadastroVenda";
import Deletar from "../negocio/Delete/deletar";
import deletarClientes from "../negocio/Delete/deletarClientes";
import deletarPet from "../negocio/Delete/deletarPet";
import deletarProdutos from "../negocio/Delete/deletarProdutos";
import deletarServicos from "../negocio/Delete/deletarServicos";
import deletarVendas from "../negocio/Delete/deletarVendas";
import Listagem from "../negocio/Read/listagem";
import ListagemClientes from "../negocio/Read/listagemClientes";
import ListagemProdutos from "../negocio/Read/listagemProdutos";
import ListagemServicos from "../negocio/Read/listagemServicos";
import ListagemVendas from "../negocio/Read/listagemVendas";
import Update from "../negocio/Update/update";
import UpdateCliente from "../negocio/Update/updateCliente";
import UpdatePet from "../negocio/Update/updatePet";
import UpdateProduto from "../negocio/Update/updateProduto";
import UpdateServico from "../negocio/Update/updateService";
import UpdateVenda from "../negocio/Update/updateVenda";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar algo`);
    console.log(`2 - Listar algo`);
    console.log(`3 - Atualizar algo`);
    console.log(`4 - Deletar algo`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    console.log(`\n\n\n`);
    let elemento: number;

    switch (opcao) {
        case 1:
            console.log(`Opções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Cadastrar pet`);
            console.log(`3 - Cadastrar produto`);
            console.log(`4 - Cadastrar serviço`);
            console.log(`5 - Cadastrar venda`);
            console.log(`0 - Cancelar`);
            elemento = entrada.receberNumero(`Escolha o que gostaria de cadastrar: `);
            console.log(`\n\n\n`);
            let cadastro: Cadastro;
            switch (elemento) {
                case 1:
                    cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    cadastro = new CadastroPet(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 3:
                    cadastro = new CadastroProduto(empresa.getProdutos)
                    cadastro.cadastrar()
                    break;
                case 4:
                    cadastro = new CadastroServico(empresa.getServicos)
                    cadastro.cadastrar()
                    break;
                case 5:
                    cadastro = new CadastroVenda(empresa.getClientes, empresa.getProdutos, empresa.getServicos, empresa.getVendas)
                    cadastro.cadastrar()
                    break;
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
                    break;
            }
            break;
        case 2:
            console.log(`Opções:`);
            console.log(`1 - Listar clientes`);
            console.log(`2 - Listar produtos`);
            console.log(`3 - Listar serviços`);
            console.log(`4 - Listar vendas`);
            console.log(`0 - Cancelar`);
            elemento = entrada.receberNumero(`Escolha o que gostaria de listar: `);
            console.log(`\n\n\n`);
            let listagem: Listagem;
            let listagemOrdenada;
            let filtro: number;
            switch (elemento) {
                case 1:
                    console.log(`Opções:`)
                    console.log(`1 - Listar todos os clientes`)
                    console.log(`2 - Listar os 10 clientes que mais consumiram (quantidade)`)
                    console.log(`3 - Listar os 5 clientes que mais gastaram (R$)`)
                    filtro = entrada.receberNumero(`Escolha uma opção: `)
                    console.log(`\n\n\n`);
                    switch (filtro){
                        case 1:
                            listagem = new ListagemClientes(empresa.getClientes)
                            listagem.listar()
                            break;
                        case 2:
                            listagemOrdenada = new ListagemClientes(empresa.getClientes)
                            listagemOrdenada.listarTop10ConsumoQty()
                            break;
                        case 3:
                            listagemOrdenada = new ListagemClientes(empresa.getClientes)
                            listagemOrdenada.listarTop5ConsumoValor()
                            break;
                        case 0:
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                            break;
                    }
                    break;
                case 2:
                    console.log(`Opções:`)
                    console.log(`1 - Listar produtos`)
                    console.log(`2 - Listar produtos por consumo (quantidade)`)
                    console.log(`3 - Listar produtos por consumo por tipo de animal`)
                    console.log(`4 - Listar produtos por consumo por raça de animal`)
                    console.log(`0 - Cancelar`)
                    filtro = entrada.receberNumero(`Escolha uma opção: `)
                    console.log(`\n\n\n`);
                    switch (filtro){
                        case 1:
                            listagem = new ListagemProdutos(empresa.getProdutos)
                            listagem.listar()
                            break;
                        case 2:
                            listagemOrdenada = new ListagemProdutos(empresa.getProdutos)
                            listagemOrdenada.listarPorConsumoQty()
                            break;
                        case 3:
                            listagemOrdenada = new ListagemProdutos(empresa.getProdutos)
                            listagemOrdenada.listarPorConsumoTipo()
                            break;
                        case 4:
                            listagemOrdenada = new ListagemProdutos(empresa.getProdutos)
                            listagemOrdenada.listarPorConsumoRaca()
                            break;
                        case 0:
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                            break;
                    }
                    break;
                case 3:
                    console.log(`Opções:`)
                    console.log(`1 - Listar serviços`)
                    console.log(`2 - Listar serviços por consumo (quantidade)`)
                    console.log(`3 - Listar serviços por consumo por tipo de animal`)
                    console.log(`4 - Listar serviços por consumo por raça de animal`)
                    console.log(`0 - Cancelar`)
                    filtro = entrada.receberNumero(`Escolha uma opção: `)
                    console.log(`\n\n\n`);
                    switch (filtro){
                        case 1:
                            listagem = new ListagemServicos(empresa.getServicos)
                            listagem.listar()
                            break;
                        case 2:
                            listagemOrdenada = new ListagemServicos(empresa.getServicos)
                            listagemOrdenada.listarPorConsumoQty()
                            break;
                        case 3:
                            listagemOrdenada = new ListagemServicos(empresa.getServicos)
                            listagemOrdenada.listarPorConsumoTipo()
                            break;
                        case 4:
                            listagemOrdenada = new ListagemServicos(empresa.getServicos)
                            listagemOrdenada.listarPorConsumoRaca()
                            break;
                        case 0:
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                            break;
                    }
                    break;
                case 4:
                    listagem = new ListagemVendas(empresa.getVendas)
                    listagem.listar()
                    break;
                case 0: 
                    break;
                default:
                    console.log(`Operação não entendida :(`)
                    break;
            }
            break;
        case 3:
            console.log(`Opções:`);
            console.log(`1 - Atualizar cliente`);
            console.log(`2 - Atualizar pet`);
            console.log(`3 - Atualizar produto`);
            console.log(`4 - Atualizar serviço`);
            console.log(`5 - Atualizar venda`);
            console.log(`0 - Voltar`);
            elemento = entrada.receberNumero(`Escolha o que gostaria de listar: `);
            console.log(`\n\n\n`);
            let atualiza: Update;
            switch (elemento) {
                case 1:
                    atualiza = new UpdateCliente(empresa.getClientes)
                    atualiza.update()
                    break;
                case 2:
                    atualiza = new UpdatePet(empresa.getClientes)
                    atualiza.update()
                    break;
                case 3:
                    atualiza = new UpdateProduto(empresa.getProdutos)
                    atualiza.update()
                    break;
                case 4:
                    atualiza = new UpdateServico(empresa.getServicos)
                    atualiza.update()
                    break;
                case 5:
                    atualiza = new UpdateVenda(empresa.getClientes, empresa.getProdutos, empresa.getServicos, empresa.getVendas)
                    atualiza.update()
                    break;
                case 0:
                    break
                default:
                    console.log(`Operação não entendida :(`)
                    break;
            }
            break;
        case 4:
            console.log(`Opções:`);
            console.log(`1 - Deletar cliente`);
            console.log(`2 - Deletar pet`);
            console.log(`3 - Deletar produto`);
            console.log(`4 - Deletar serviço`);
            console.log(`5 - Deletar venda`);
            console.log(`0 - Cancelar`)
            elemento = entrada.receberNumero(`Escolha o que gostaria de Deletar: `);
            console.log(`\n\n\n`);
            let deletar: Deletar;
            let key: number;
            switch (elemento) {
                case 1:
                    key = entrada.receberNumero(`Digite o CPF do cliente a ser deletado: `);
                    deletar = new deletarClientes(empresa.getClientes)
                    deletar.deletar(key)
                    break;
                case 2:
                    key = entrada.receberNumero(`Digite o CPF do dono: `);
                    deletar = new deletarPet(empresa.getClientes)
                    deletar.deletar(key)
                    break;
                case 3:
                    key = entrada.receberNumero(`Digite o ID do produto a ser deletado: `);
                    deletar = new deletarProdutos(empresa.getVendas, empresa.getProdutos)
                    deletar.deletar(key)
                    break;
                case 4:
                    key = entrada.receberNumero(`Digite o ID do servico a ser deletado: `);
                    deletar = new deletarServicos(empresa.getVendas, empresa.getServicos)
                    deletar.deletar(key)
                    break;
                case 5:
                    key = entrada.receberNumero(`Digite o ID da venda a ser deletada: `);
                    deletar = new deletarVendas(empresa.getVendas)
                    deletar.deletar(key)
                    break;
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
                    break;
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
            break;
    }
    console.log(`\n\n\n`);
}