const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require( './graphql/schema/fake/index');
const  resolvers  = require('./graphql/resolvers/fake/query/hello');


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);