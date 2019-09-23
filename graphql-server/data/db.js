import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://rafaelhecr:ghwja18330.-@cluster0-2cmdf.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

//Definir el schema de clientes
const clientesSchema = new mongoose.Schema({
    nombre : String,
    apellido : String, 
    empresa : String,
    emails: Array,
    edad : Number,
    tipo: String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes };