/* eslint-disable jsx-a11y/anchor-is-valid */
import servicos from "../json/servicos.json";

export default function ListaServicos() {
    let state = {
        servicos: servicos
    }

    return (
        <div className="container-fluid">
            <div className="list-group">
                {
                    state.servicos.map((servico, index) => 
                        <a key={index} href="#" className="list-group-item list-group-item-action">
                            {servico.nome}
                        </a>
                    )
                }
            </div>
        </div>
    )
}