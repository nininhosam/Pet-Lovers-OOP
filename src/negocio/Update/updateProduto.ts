import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Update from "./update";

export default class UpdateProduto extends Update {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nAtualizando o produto:`);
        let id = this.entrada.receberNumero(`Por favor informe o id do produto a ser atualizado: `);
        let produto = this.produtos.find(produto => produto.id == id)
        if (produto == null) {
            console.log(`\nProduto não encontrado :(`);
            return
        }
        console.log(`\nOpções:`)
        console.log(`1 - Nome`)
        console.log(`2 - Preço`)
        console.log(`0 - Cancelar`)
        let opcao = this.entrada.receberNumero(`Por favor informe o que deseja atualizar: `)
        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `)
                produto.nome = nome;
                break
            case 2:
                let preco = this.entrada.receberNumero(`Por favor informe o novo preço do produto: `)
                produto.preco = preco;
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

