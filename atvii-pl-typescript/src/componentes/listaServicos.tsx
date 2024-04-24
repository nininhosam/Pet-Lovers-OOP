/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import servicos from "../json/servicos.json";
import { Servicos } from "../models/servicos";

type props = {
    tema: string
}
type state = {
    servicos: Servicos
}

export default class ListaServico extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            servicos: servicos
        }
    
    }
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {
                        this.state.servicos.map((servico, index) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action" style={index === 1 ? { backgroundColor: tema } : {}}>
                                {servico.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}