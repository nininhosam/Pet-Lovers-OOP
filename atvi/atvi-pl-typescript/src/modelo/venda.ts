import Cliente from "./cliente";
import Item from "./item";
import Produto from "./produto";
import Servico from "./servico";

export default class Venda {
    private static currentId = 1;
    public id!:number;
    public cliente: Cliente;
    public itens: Array<Item>;

    constructor(cliente: Cliente, itens: Array<Item>) {
        this.id = Venda.currentId++;
        this.cliente = cliente;
        this.itens = itens
        this.itens.forEach(item => {
                item.elemento.consumoTotal += item.qty;
                if (item.elemento instanceof Produto) {
                    this.cliente.addProdutoConsumido(item.elemento);
                }
                if (item.elemento instanceof Servico) {
                    this.cliente.addServicoConsumido(item.elemento);
                }
        });
    }
}