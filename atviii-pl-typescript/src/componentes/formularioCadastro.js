export default function FormularioCadastro(props) {
    let tema = props.tema
    return (
        <div className="accordion" id="accordionExample">
                
                <div className="accordion-item">

                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cadastrar cliente
                    </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Cadastrar Produto
                    </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text rounded-start" id="basic-addon1">R$</span>
                                        </div>
                                        <input type="number" className="form-control" placeholder="Preço" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>    
                        </div>
                    </div>

                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Cadastrar Serviço
                    </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <div className="container-fluid">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text rounded-start" id="basic-addon1">R$</span>
                                        </div>
                                        <input type="number" className="form-control" placeholder="Preço" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>  
                        </div>
                    </div>

                </div>

                
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Cadastrar Venda
                    </button>
                    </h2>

                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <form>





                                    <div className="form-group">
                                        <label className="h5">Dados da venda</label>
                                        <select className="form-control form-select form-select-lg mb-3" name="clientId" id="clientId" required>
                                            <option disabled selected value="">Selecione um cliente</option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-select form-select-lg mb-3" name="clientId" id="clientId" required>
                                            <option disabled selected value="">Selecione o pet</option>
                                            <option value=""></option>
                                        </select>
                                    </div>



                                    <div className="form-group mb-5">
                                        <div className="d-flex justify-content-between">
                                            <select className="form-control form-select w-50 d-inline-block" name="productId" id="productId" required>
                                                <option value="" selected disabled>Selecione um produto/serviço</option>
                                                <option value="{{ productOption.id }}">R$ - Nome do Item</option>
                                            </select>

                                            <input type="number" name="quantidade" id="quantidade" required placeholder="Quantidade"></input>
                                            <button className="btn btn-primary" >Adicionar item</button>
                                        </div>
                                    </div>







                                    <div className="vendaItemsList">
                                        <p className="h5">Carrinho</p>
                                        <div className="overflow-auto">
                                            <table className="table table-striped table-hover">
                                                <thead className="thead-dark">
                                                    <tr>
                                                    <th scope="col" className="text-nowrap">Produto</th>
                                                    <th scope="col" >Quantidade</th>
                                                    <th scope="col" >Preço</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Produto #1</td>
                                                        <td>x72</td>
                                                        <td>R$ 00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serviço #1</td>
                                                        <td>x12</td>
                                                        <td>R$ 00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Produto #3</td>
                                                        <td>x20</td>
                                                        <td>R$ 00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3} className="text-center">Total: R$ xx.yy</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        </div>



                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>  
                        </div>
                    </div>

                </div>

            </div>
    )
}