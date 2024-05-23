import { Component } from "react";

type props = {
    tema: string
}
type state = {
    cliente: {
        nome: string,
        nomeSocial: string,
        email: string,
        endereco: null,
        telefones: Array<any>,
        links: Array<any>
    }
}

export default class FormularioCadastro extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            cliente: {
                nome: "",
                nomeSocial: "",
                email: "",
                endereco: null,
                telefones: [],
                links: []
            }
        }
        this.clientChange = this.clientChange.bind(this);
        this.submitClient = this.submitClient.bind(this);
    }
    clientChange(e: React.ChangeEvent<HTMLInputElement>): void {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            cliente: {
                ...this.state.cliente,
                [name]: value
            }
        })
    }
    submitClient(e: React.FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        console.log(this.state.cliente)
        fetch('http://localhost:32831/cliente/cadastrar', {
            body: JSON.stringify({
                nome: this.state.cliente.nome,
                nomeSocial: this.state.cliente.nomeSocial,
                email: this.state.cliente.email,
                endereco: this.state.cliente.endereco,
                telefones: this.state.cliente.telefones,
                links: this.state.cliente.links
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        .then((res)=>{
            this.setState({
                cliente: {
                    nome: "",
                    nomeSocial: "",
                    email: "",
                    endereco: null,
                    telefones: [],
                    links: []
                }
        })})
    }
    render() {
        let tema = this.props.tema
        return (
            <div className="accordion" id="accordionExample">
                
                <div className="accordion-item">

                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cadastrar cliente
                    </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <form onSubmit={this.submitClient}>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" onChange={this.clientChange} name="nome" value={this.state.cliente.nome} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" onChange={this.clientChange} name="nomeSocial" value={this.state.cliente.nomeSocial}placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" onChange={this.clientChange} name="email" value={this.state.cliente.email} placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Cadastrar Produto
                    </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text rounded-start" id="basic-addon1">R$</span>
                                        </div>
                                        <input type="number" className="form-control" placeholder="Preço" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>    
                        </div>
                    </div>

                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Cadastrar Serviço
                    </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div className="container-fluid">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text rounded-start" id="basic-addon1">R$</span>
                                        </div>
                                        <input type="number" className="form-control" placeholder="Preço" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>  
                        </div>
                    </div>

                </div>

                
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Cadastrar Venda
                    </button>
                    </h2>

                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <form>





                                    <div className="form-group">
                                        <label className="h5">Dados da venda</label>
                                        <select className="form-control form-select form-select-lg mb-3" name="clientId" id="clientId" required defaultValue={""}>
                                            <option value="" disabled>Selecione um cliente</option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select form-select-lg mb-3" name="clientId" id="clientId" required defaultValue={""}>
                                            <option value="" disabled>Selecione o pet</option>
                                            <option value=""></option>
                                        </select>
                                    </div>



                                    <div className="form-group mb-5">
                                        <div className="d-flex justify-content-between">
                                            <select className="form-control form-select w-50 d-inline-block" name="productId" id="productId" required defaultValue={""}>
                                                <option value="" disabled>Selecione um produto/serviço</option>
                                                <option value="{{ productOption.id }}">R$ - Nome do Item</option>
                                            </select>

                                            <input type="number" name="quantidade" id="quantidade" required placeholder="Quantidade"></input>
                                            <button className="btn btn-primary" >Adicionar item</button>
                                        </div>
                                    </div>







                                    <div className="vendaItemsList">
                                        <p className="h5">Carrinho</p>
                                        <div className="overflow-auto">
                                            <table className="table table-striped table-hover">
                                                <thead className="thead-dark">
                                                    <tr>
                                                    <th scope="col" className="text-nowrap">Produto</th>
                                                    <th scope="col" >Quantidade</th>
                                                    <th scope="col" >Preço</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Produto #1</td>
                                                        <td>x72</td>
                                                        <td>R$ 00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serviço #1</td>
                                                        <td>x12</td>
                                                        <td>R$ 00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Produto #3</td>
                                                        <td>x20</td>
                                                        <td>R$ 00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3} className="text-center">Total: R$ xx.yy</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        </div>



                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>  
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}