/* eslint-disable jsx-a11y/anchor-is-valid */
import vendas from "../json/vendas.json";

export default function ListaVendas() {
    let state = {
        vendas: vendas
    }

    return (
        <div className="container-fluid">
            <div className="list-group">
                {
                    state.vendas.map((venda, index) => 
                        <a key={index} href="#" className="list-group-item list-group-item-action">
                            Venda #{venda.id} - {venda.cliente["nome social"]}/{venda.pet.nome}
                        </a>
                    )
                }
            </div>
        </div>
    )
}