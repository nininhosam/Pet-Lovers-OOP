export interface Produto {
    id:number
    nome: string
    preco: number
    consumoTotal: number
}
export type Produtos = Array<Produto>;