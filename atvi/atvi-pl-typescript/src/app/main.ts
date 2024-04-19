import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cadastro from "../negocio/cadastro";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import CadastroVenda from "../negocio/cadastroVenda";
import Listagem from "../negocio/listagem";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemVendas from "../negocio/listagemVendas";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar algo`);
    console.log(`2 - Listar algo`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    let elemento: number;

    switch (opcao) {
        case 1:
            console.log(`Opções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Cadastrar pet`);
            console.log(`3 - Cadastrar produto`);
            console.log(`4 - Cadastrar serviço`);
            console.log(`5 - Cadastrar venda`);
            console.log(`0 - Voltar`);
            elemento = entrada.receberNumero(`Escolha o que gostaria de cadastrar: `);
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
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 2:
            console.log(`Opções:`);
            console.log(`1 - Listar clientes`);
            console.log(`2 - Listar produtos`);
            console.log(`3 - Listar serviços`);
            console.log(`4 - Listar vendas`);
            console.log(`0 - Voltar`);
            elemento = entrada.receberNumero(`Escolha o que gostaria de listar: `);
            let listagem: Listagem;
            let listagemOrdenada;
            let filtro: number;
            switch(elemento) {
                case 1:
                    console.log(`Opções:`)
                    console.log(`1 - Listar todos os clientes`)
                    console.log(`2 - Listar os 10 clientes que mais consumiram (quantidade)`)
                    console.log(`3 - Listar os 5 clientes que mais gastaram (R$)`)
                    filtro = entrada.receberNumero(`Escolha uma opção: `)
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
                    filtro = entrada.receberNumero(`Escolha uma opção: `)
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
                    filtro = entrada.receberNumero(`Escolha uma opção: `)
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
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}