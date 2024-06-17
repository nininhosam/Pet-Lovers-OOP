import { Produto } from "./produtos";
import { Servico } from "./servicos";

export interface Item {
    qty: number;
    elemento: Produto | Servico;
}
export type Itens = Array<Item>;