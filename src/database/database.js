const { connect } = require('mongoose')
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = require('../config/config.js')
const infoMessage = require('../messages/infoMessage')

const connectDB = async () => {
    try {
        await connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`)
        console.log(infoMessage.databaseConnected)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }