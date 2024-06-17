/* eslint-disable jsx-a11y/anchor-is-valid */
import clientes from "../json/clientes.json";

export default function ListaClientes() {
    let state = {
        clientes: clientes
    }

    return (
        <div className="container-fluid">
            <div className="list-group">
                {
                    state.clientes.map((cliente, index) => 
                        <a key={index} href="#" className="list-group-item list-group-item-action">
                            {cliente.nome}
                        </a>
                    )
                }
            </div>
        </div>
    )
}