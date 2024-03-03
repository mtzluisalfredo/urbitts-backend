import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Define tu esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }

  type Subscription {
    count: Int
  }
`);

// Root resolver
const root = {
  hello: () => 'Hello world!',
};

// Configura el servidor GraphQL
const graphqlServer = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Habilita la interfaz gráfica de GraphiQL para probar tu API
});

export default graphqlServer;
