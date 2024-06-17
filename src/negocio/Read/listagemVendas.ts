import Venda from "../../modelo/venda";
import Listagem from "./listagem";
import ListagemItens from "./listagemItens";

export default class ListagemVendas extends Listagem {
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
    }
    public listar(): void {
        console.log(`Vendas: `);
        this.vendas.forEach(venda => {
            console.log(`\tId: ` + venda.id);
            console.log(`\tNome do cliente: ` + venda.cliente.nome);
            console.log(`\tPet referente: ` + venda.pet.getNome);
            let listagem = new ListagemItens(venda.itens)
            listagem.listar()
            
            console.log(`------------------------------`);
        });
        console.log(`\n`);
    }
    
}