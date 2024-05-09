/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }  else if (this.state.tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'Cadastros']} />
                    {/* <ListaProduto tema="#e3f2fd" /> */}
                </>
            )
        
        } else if (this.state.tela === 'Servicos') {
            return (
                <>
                    <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'Cadastros']} />
                    {/* <ListaServico tema="#e3f2fd" /> */}
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'Cadastros']} />
                    {/* <FormularioCadastro tema="#e3f2fd" /> */}
                </>
            )
        }
    }

    return (
        construirView()
    )
}