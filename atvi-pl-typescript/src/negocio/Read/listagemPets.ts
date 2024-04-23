import Pet from "../../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
    }
    public listar(): void {
        process.stdout.write(`Pets: `);
        if (this.pets.length == 0) {
            console.log(`Nenhum pet cadastrado`); 
        } else console.log('');
        this.pets.forEach(pet => {
            console.log(`\tId: ` + pet.getId);
            console.log(`\tNome: ` + pet.getNome);
            console.log(`\tRaça: ` + pet.getRaca);
            console.log(`\tGênero: ` + pet.getGenero);
            console.log(`\tTipo: ` + pet.getTipo);
            console.log(`\t------------------------------`);
        });
        console.log(`\n`);
    }
}