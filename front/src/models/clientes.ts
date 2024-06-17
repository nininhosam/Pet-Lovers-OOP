import { CPF } from "./cpfs"
import { Pets } from "./pets"
import { Produtos } from "./produtos"
import { RGS } from "./rgs"
import { Servico } from "./servicos"
import { Telefones } from "./telefones"

export interface Cliente {
    nome: string
    nomeSocial: string
    cpf: CPF
    rgs?: RGS
    dataCadastro?: string
    telefones?: Telefones
    produtosConsumidos?: Produtos
    servicosConsumidos?: Servico
    pets?: Pets
}

export type Clientes = Array<Cliente>;