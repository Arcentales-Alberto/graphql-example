const { app, port, ApolloServer, typeDefs, resolvers, connectDB } = require('./app')
const infoMessage = require('./messages/infoMessage')
const logger = require('./logs/config')

const main = async () => {
    try {
        connectDB()
        const apolloServer = new ApolloServer({
            typeDefs,
            resolvers
        })
        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        await app.listen(port, () => {
           logger.info(`${infoMessage.databaseConnected}${port}`)
        })
    } catch (error) {
        logger.error(error)
    }
}

main()