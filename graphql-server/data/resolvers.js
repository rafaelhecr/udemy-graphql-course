import mongoose from 'mongoose';
import { Clientes } from './db'
import { rejects } from 'assert';

// class Cliente {
//     constructor(id,{ nombre, apellido, empresa, emails, edad, tipo, pedidos }){
//         this.id = id;
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.empresa = empresa;
//         this.emails = emails;
//         this.edad = edad;
//         this.tipo = tipo;
//         this.pedidos = pedidos;
//     }
// }

export const resolvers= {
    Query: {
        getCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                Clientes.findById(id, (error, cliente) => {
                    if (error) rejects(error)
                    else resolve(cliente)
                })
            });
        },

        getClientes: (root, {limite}) => {
            return Clientes.find({}).limit(limite)
        }
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

            return new Promise ((resolve, object) => {
                nuevoCliente.save((error) => {
                    if (error) rejects (error)
                    else resolve (nuevoCliente)
                })
            })

        },

        actualizarCliente: (root, {input}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate( {_id: input.id }, input, {new: true}, (error, cliente )=> {
                    if (error) rejects(error)
                    else resolve(cliente)
                })
            })
        },
        
        eliminarCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects (error)
                    else resolve ("Se elimino correctamente")
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