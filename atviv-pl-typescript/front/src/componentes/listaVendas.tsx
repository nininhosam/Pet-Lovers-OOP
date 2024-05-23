/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import vendas from "../json/vendas.json";

type props = {
    tema: string
}
type state = {
    vendas: any
}

export default class ListaVenda extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            vendas: vendas
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
                        this.state.vendas.map((venda: any, index: number) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action">
                                Venda #{venda.id} - {venda.cliente["nome social"]}/{venda.pet.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}