export interface Servico {
    id:number
    nome: string
    preco: number
    consumoTotal: number
}
export type Servicos = Array<Servico>;