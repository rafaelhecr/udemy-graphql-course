import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from  '../queries';

const Contactos = () => (
    <Query query={CLIENTES_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return "Cargando...";
            if(error) return `Error: ${error.message}`;
            console.log(data);
            return(
                <Fragment>
                    <h2 className="text-center">Listado de Clientes</h2>
                    <ul className="list-groups mt-4">
                        {data.getClientes.map(cliente => (
                            <li key={cliente.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8 d-flex jusitfy-content-between align-items-center">
                                        {cliente.nombre} {cliente.apellido} - {cliente.empresa}
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <Link to={`/cliente/editar/${cliente.id}`} className="btn btn-success d-block d-md-inline-block">
                                            Editar Cliente
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
        }}
    </Query>
)

export default Contactos