import Cliente from "./cliente";
import Item from "./item";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";

export default class Venda {
    private static currentId = 1;
    public id!:number;
    public cliente: Cliente;
    public pet: Pet;
    public itens: Array<Item>;

    constructor(cliente: Cliente, pet: Pet, itens: Array<Item>) {
        this.id = Venda.currentId++;
        this.cliente = cliente;
        this.pet = pet;
        this.itens = itens
        this.itens.forEach(item => {
                item.elemento.consumoTotal += item.qty;
                if (item.elemento instanceof Produto) {
                    for (let i = 1; i <= item.qty; i++) this.cliente.addProdutoConsumido(item.elemento);
                }
                if (item.elemento instanceof Servico) {
                    for (let i = 1; i <= item.qty; i++) this.cliente.addServicoConsumido(item.elemento);
                }
        });
    }
}