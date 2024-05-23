/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Clientes } from "../models/clientes";

type props = {
    tema: string
}
type state = {
    clientes: Clientes
}

export default class ListaCliente extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            clientes: []
        }
        this.injectCSS();
    }
    
    async getData(){
        this.setState({clientes: await fetch('http://localhost:32831/cliente/clientes').then(response => response.json())})
        console.log(this.state.clientes)
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

    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {
                        this.state.clientes.map((cliente, index) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action">
                                {cliente.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}