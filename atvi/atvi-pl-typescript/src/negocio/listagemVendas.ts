import Venda from "../modelo/venda";
import Listagem from "./listagem";
import ListagemItens from "./listagemItens";

export default class ListagemVendas extends Listagem {
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
    }
    public listar(): void {
        console.log(`\tVendas: `);
        this.vendas.forEach(venda => {
            console.log(`\t\tId: ` + venda.id);
            console.log(`\t\tNome do cliente: ` + venda.cliente.nome);
            console.log(`\t\tItens: `);
            let listagem = new ListagemItens(venda.itens)
            listagem.listar()
            
            console.log(`\t------------------------------`);
        });
        console.log(`\n`);
    }
}