/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import clientes from "../json/clientes.json";
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
            clientes: clientes
        }
    }
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {
                        this.state.clientes.map((cliente, index) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action" style={index === 1 ? { backgroundColor: tema } : {}}>
                                {cliente.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}