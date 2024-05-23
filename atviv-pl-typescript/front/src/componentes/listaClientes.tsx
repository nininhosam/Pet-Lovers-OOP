/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Clientes } from "../models/clientes";

type props = {
    tema: string
}
type state = {
    clientes: Clientes
    selCli: any
    updating: boolean
}

export default class ListaCliente extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            clientes: [],
            selCli: {
                id: null,
                nome: "",
                nomeSocial: "",
                email: "",
                endereco: null,
                telefones: [],
                links: []
            },
            updating: false
        }
        this.clientChange = this.clientChange.bind(this);
        this.updateCli = this.updateCli.bind(this);
        this.injectCSS();
    }
    
    async getData(){
        this.setState({clientes: await fetch('http://localhost:32831/cliente/clientes').then(response => response.json())})
    }
    async deleteData(cliente: any, e: any){
        if (e && e.stopPropagation) e.stopPropagation();
        await fetch('http://localhost:32831/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        this.getData()
    }
    async updateData(cliente: any){
        this.setState({
            selCli: cliente,
            updating: true
        })
    }
    
    injectCSS(){
        const css = `.list-group-item:focus { background-color: ${this.props.tema}; }`,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        head.appendChild(style);
        style.appendChild(document.createTextNode(css));
    }
    componentDidMount(): void {
        this.getData()
    }

    clientChange(e: React.ChangeEvent<HTMLInputElement>): void {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            selCli: {
                ...this.state.selCli,
                [name]: value
            }
        })
    }    
    async updateCli(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        await fetch('http://localhost:32831/cliente/atualizar', {
            body: JSON.stringify(this.state.selCli),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        })
        .then((res)=>{
            this.setState({
                selCli: {
                    nome: "",
                    nomeSocial: "",
                    email: "",
                    endereco: null,
                    telefones: [],
                    links: []
                }
        })})
        this.getData()
        this.setState({updating: false})
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {
                        this.state.clientes.map((cliente, index) => 
                            <a key={index} href="#" onClick={()=>{
                                this.updateData(cliente);
                            }} 
                            className="list-group-item list-group-item-action d-flex justify-content-between">
                                <span>
                                    {cliente.nome}
                                </span>
                                <div onClick={(e)=>{
                                    this.deleteData(cliente, e)
                                }} style={{aspectRatio: 1, verticalAlign: "center", textAlign: "center", padding: "0.2rem", background: "#eeeeee", borderRadius: "4px"}}>
                                    X
                                </div>
                            </a>
                        )
                    }
                </div>
                
                {
                    this.state.updating ?
                    <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: "rgb(0,0,0,0.3)", position: "fixed", width: "100%", height: "100%", inset: 0, zIndex:99}} onClick={()=>{
                        this.setState({
                            selCli: {
                                id: null,
                                nome: "",
                                nomeSocial: "",
                                email: "",
                                endereco: null,
                                telefones: [],
                                links: []
                            },
                            updating: false
                        })
                    }}>
                        <div style={{backgroundColor: "#efefef", padding: "1.5rem 2rem", borderRadius: "1rem"}} onClick={(e)=>{
                                if (e && e.stopPropagation) e.stopPropagation();
                            }}>
                            <h2>Atualizar cliente #{this.state.selCli.id}</h2>
                            <form onSubmit={this.updateCli}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" onChange={this.clientChange} name="nome" value={this.state.selCli.nome} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" onChange={this.clientChange} name="nomeSocial" value={this.state.selCli.nomeSocial}placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" onChange={this.clientChange} name="email" value={this.state.selCli.email} placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    : null
                }

            </div>
        )
    }
}