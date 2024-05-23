/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaClientes from "./listaClientes";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos.js";
import FormularioCadastro from "./formularioCadastro.js";
import ListaVendas from "./listaVendas.js";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        let barra = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', "Vendas", 'Cadastros']} />
        if (tela === 'Clientes') {
            return (
                <>
                    {barra}
                    <ListaClientes/>
                </>
            )
        }  else if (tela === 'Produtos') {
            return (
                <>
                    {barra}
                    <ListaProdutos/>
                </>
            )
        
        } else if (tela === 'Servicos') {
            return (
                <>
                    {barra}
                    <ListaServicos/>
                </>
            )
        } else if (tela === 'Vendas') {
            return (
                <>
                    {barra}
                    <ListaVendas/>
                </>
            )
        } else {
            return (
                <>
                    {barra}
                    <FormularioCadastro/>
                </>
            )
        }
    }

    return (
        construirView()
    )
}