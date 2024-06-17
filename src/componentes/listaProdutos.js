/* eslint-disable jsx-a11y/anchor-is-valid */
import produtos from "../json/produtos.json";

export default function ListaProdutos() {
    let state = {
        produtos: produtos
    }

    return (
        <div className="container-fluid">
            <div className="list-group">
                {
                    state.produtos.map((produto, index) => 
                        <a key={index} href="#" className="list-group-item list-group-item-action">
                            {produto.nome}
                        </a>
                    )
                }
            </div>
        </div>
    )
}