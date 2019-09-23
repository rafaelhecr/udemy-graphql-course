import mongoose from 'mongoose';
import { Clientes } from './db'

class Cliente {
    constructor(id,{ nombre, apellido, empresa, emails, edad, tipo, pedidos }){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.emails = emails;
        this.edad = edad;
        this.tipo = tipo;
        this.pedidos = pedidos;
    }
}

export const resolvers= {
    Query: {
        getCliente: ({id}) => {
            return new Cliente(id, clientesDB[id])
        },
    },
    Mutation: {
        crearCliente: (root, {input}) => {
            // const id = require('crypto').randomBytes(10).toString('hex');
            const nuevoCliente = new Clientes({
                nombre : input.nombre,
                apellido : input.apellido,
                empresa : input.empresa,
                emails : input.emails,
                edad : input.edad,
                tipo : input.tipo,
                pedidos : input.pedidos
            })

            nuevoCliente.id = nuevoCliente._id;

            return new Promise ((resolve, reject) => {
                nuevoCliente.save((error) => {
                    if (error) reject (error)
                    else resolve (nuevoCliente)
                })
            })

        }
    } 
}

//el resolver
// const resolvers = {
    
//     // cliente: () => {
//     //     return{
//     //         "id": 1253456,
//     //         "nombre": "Rafael",
//     //         "apellido": "Herrera",
//     //         "empresa": "Bussi",
//     //         "email": "rafael@bussi.com.mx"
//     //     }
//     // },
    
// };

// export default resolvers;