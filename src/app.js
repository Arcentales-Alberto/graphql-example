const express = require('express')
const { PORT } = require('./config/config')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./graphql/types/typeDefs')
const { resolvers } = require('./graphql/resolvers/resolvers')
const { connectDB } = require('./database/database')

const app = express()
const port = PORT || 4000

module.exports = { app, port, ApolloServer, typeDefs, resolvers, connectDB }