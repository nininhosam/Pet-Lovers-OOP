import { CPF } from "./cpfs"

export interface Pet {
    nome: string
    tipo: string
    raca: string
    genero: string
    id: number
    donoCPF: string;
}
export type Pets = Array<Pet>;