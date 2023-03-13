const { ApolloServer } = require("apollo-server-express");

const express = require("express");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then((res) => {
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen({ port: 3000 }, () => {
    console.log(`
      Server running on PORT: 3000
      Please check http://localhost:3000/graphql
      `);
  });
});
