/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Servicos } from "../models/servicos";
import servicos from "../json/servicos.json";

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
                        this.state.servicos.map((servico, index) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action">
                                {servico.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}