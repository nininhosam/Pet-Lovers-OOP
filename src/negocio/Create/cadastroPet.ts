import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let cpfDono = this.entrada.receberTexto(`Por favor informe o cpf do dono do pet: `)
        let dono = this.clientes.find(cliente => cliente.getCpf.getValor == cpfDono)
        if (dono == undefined) {
            console.log(`Cliente não encontrado :(`)
            return
        }
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let genero;

        let invalido = (genero: string) => genero != "M" && genero != "F"
        do {
            genero = this.entrada.receberTexto(`Por favor informe o gênero do pet (M/F): `).toUpperCase()
            if (invalido(genero)) console.log("Gênero inválido")
        } while (invalido(genero))
    
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let pet = new Pet(nome, raca, genero as "M" | "F", tipo, dono.getCpf);
        dono.addPet(pet);
        console.log(`\nCadastro concluído :)\n`);
    }
}