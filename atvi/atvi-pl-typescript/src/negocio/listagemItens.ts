import Item from "../modelo/item";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemItens extends Listagem {
    private itens: Array<Item>
    constructor(itens: Array<Item>) {
        super()
        this.itens = itens
    }
    public listar(): void {
        console.log(`Itens: `);
        this.itens.forEach(item => {
            let tipoItem = item.elemento instanceof Produto ? 'Produto' : 'Servico';
            console.log(`\t${tipoItem}: ` + item.elemento.nome);
            console.log(`\tQuantidade: ` + item.qty);
            console.log(`\t------------------------------`);
        });
        console.log(`\n`);
    }
}