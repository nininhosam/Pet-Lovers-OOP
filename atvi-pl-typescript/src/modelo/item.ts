import Produto from "./produto";
import Servico from "./servico";

export default class Item {
    public qty: number;
    public elemento: Produto | Servico;

    constructor(qty: number, elemento: Produto | Servico) {
        this.qty = qty;
        this.elemento = elemento;
    }
}