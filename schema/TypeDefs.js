const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    getAllUsers: [User!]!
    getUser(id: ID!): User!
  }
`;

module.exports = { typeDefs };
