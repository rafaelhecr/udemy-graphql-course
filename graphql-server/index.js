import express from 'express';
// import resolvers from './data/resolvers';

//graphql
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema'

// const root = resolvers;

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Servidor respondiendo correctamente');
})

app.use('/graphql', graphqlHTTP({
    //EL schema que va a utilizar cuando estemos en esta url
    schema,
    // //El resolver se pasa como Root Value
    // rootValue: root,

    //Utilizar Graphiql
    graphiql: true

}));

app.listen(8090, () => console.log('Sevidor escuchando correctamente en el puerto 8090'));