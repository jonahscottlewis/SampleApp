const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getUser(email: String!): User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
