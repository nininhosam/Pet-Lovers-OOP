export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor.replace(".", "").replace("-", "")
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
}