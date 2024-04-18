export default class Venda {
    private static currentId = 1;
    public id!:number

    constructor() {
        this.id = Venda.currentId++;
    }
}