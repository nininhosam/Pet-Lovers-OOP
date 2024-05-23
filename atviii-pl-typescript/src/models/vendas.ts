import { Itens } from "./Itens";
import { Cliente } from "./clientes";
import { Pet } from "./pets";

export interface Venda {
    id: number;
    cliente: Cliente;
    pet: Pet;
    itens: Itens;
}
export type Vendas = Array<Venda>;