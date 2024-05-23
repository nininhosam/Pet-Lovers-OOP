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
        // this.state = {
        //     clientes: clientes
        // }
        this.injectCSS();
    }
    injectCSS(){
        const css = `.list-group-item:focus { background-color: ${this.props.tema}; }`,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        head.appendChild(style);
        style.appendChild(document.createTextNode(css));
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {
                        // this.state.clientes.map((cliente, index) => 
                        //     <a key={index} href="#" className="list-group-item list-group-item-action">
                        //         {cliente.nome}
                        //     </a>
                        // )
                    }
                </div>
            </div>
        )
    }
}