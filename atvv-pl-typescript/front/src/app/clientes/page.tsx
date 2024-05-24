/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import '@/app/globals.css'
import clientes from "../../../public/json/clientes.json";
import { Table } from "flowbite-react";
import ContentArea from '@/modules/content_area';
import BarraDeNavegacao from '@/modules/barra_navegacao';

export default function ListaClientes() {

    return (
        <main className='h-full min-h-dvh'>
        <BarraDeNavegacao/>
        <ContentArea>
            <div className='w-full p-14'>
                <div className='bg-slate-100 shadow-2xl rounded-sm py-6 px-6'>
                    <div>
                        <section className='w-full text-left flex justify-between pb-6'>
                        <h1 className='text-6xl font-bold text-gray-900 inline'>Clientes</h1>
                        </section>
                        <Table className="w-100 rounded-lg bg-purple-500 text-black">
                            <Table.Head className='w-full text-lg text-[#fbfbfb]'>
                                <Table.HeadCell>Nome</Table.HeadCell>
                                <Table.HeadCell>Nome Social</Table.HeadCell>
                                <Table.HeadCell>CPF</Table.HeadCell>
                                <Table.HeadCell>RGs</Table.HeadCell>
                                <Table.HeadCell>Telefone</Table.HeadCell>
                                <Table.HeadCell>Pets</Table.HeadCell>
                                {/* <Table.HeadCell>Data de cadstro</Table.HeadCell>
                                <Table.HeadCell>Consumo</Table.HeadCell> */}
                            </Table.Head>
                            <Table.Body className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg">
                                {
                                    clientes.map((cliente, index) => 
                                        <Table.Row key={index} className="odd:bg-[#f1f1f1] even:bg-[#e4e4e4] font-medium">
                                            <Table.Cell className="whitespace-nowrap">{cliente.nome}</Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">{cliente.nomeSocial}</Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">{cliente.cpf.valor}</Table.Cell>
                                            <Table.Cell className="whitespace-nowrap"></Table.Cell>
                                            <Table.Cell className="whitespace-nowrap"></Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                {
                                                    cliente.pets.map((pet, index) => 
                                                        <div key={index}>{index} - {pet.nome}</div>
                                                    )
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body> 
                        </Table>
                    </div>
                </div>
            </div>
        </ContentArea>
    </main>
    )
}