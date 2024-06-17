/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component,  } from "react";
import { Produtos } from "../models/produtos";
import produtos from "../json/produtos.json";

type props = {
    tema: string
}
type state = {
    produtos: Produtos
}

export default class ListaProduto extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            produtos: produtos
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
                        this.state.produtos.map((produto, index) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action">
                                {produto.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}