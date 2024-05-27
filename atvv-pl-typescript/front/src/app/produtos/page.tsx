/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import '@/app/globals.css'
import produtos from "../../../public/json/produtos.json";
import { Table } from "flowbite-react";
import ContentArea from '@/modules/content_area';
import BarraDeNavegacao from '@/modules/barra_navegacao';

export default function ListaClientes() {

    return (
    <main className='h-full min-h-dvh'>
        <BarraDeNavegacao/>
        <ContentArea>
            <div className='p-14 w-4/5'>
                <div className='bg-slate-100 w-full shadow-2xl rounded-sm py-6 px-6'>
                    <section className='w-full text-left flex justify-between pb-6'>
                    <h1 className='text-6xl font-bold text-gray-900 inline'>Produtos</h1>
                    </section>
                    <Table className="rounded-lg bg-transparent">
                        <Table.Head className='w-full text-lg text-black bg-purple-500 rounded-t-lg'>
                            <Table.HeadCell className='text-black'>Id</Table.HeadCell>
                            <Table.HeadCell className='text-black'>Nome</Table.HeadCell>
                            <Table.HeadCell className='text-black'>Preço</Table.HeadCell>
                            {/* <Table.HeadCell>Data de cadstro</Table.HeadCell>
                            <Table.HeadCell>Consumo</Table.HeadCell> */}
                        </Table.Head>
                        <Table.Body className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg">
                            {
                                produtos.map((produto, index) => 
                                    <Table.Row key={index} className="odd:bg-[#f1f1f1] even:bg-[#e4e4e4] font-medium text-black">
                                        <Table.Cell className="whitespace-nowrap">{produto.id}</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap">{produto.nome}</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap">R$ {produto.preco}</Table.Cell>
                                    </Table.Row>
                                )
                            }
                        </Table.Body> 
                    </Table>
                </div>
            </div>
        </ContentArea>
    </main>
    )
}