/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component,  } from "react";
import produtos from '../json/produtos.json'

type props = {
    tema: string
}
type state = {
    produtos: Array<any>
}

export default class ListaProduto extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            produtos: produtos
        }
    }

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {
                        this.state.produtos.map((produto, index) => 
                            <a key={index} href="#" className="list-group-item list-group-item-action" style={index === 3 ? { backgroundColor: tema } : {}}>
                                {produto.nome}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}