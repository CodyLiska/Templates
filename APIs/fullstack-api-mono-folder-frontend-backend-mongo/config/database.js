//*This function creates a database connection. It is exported and called within server.js

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.set('strictQuery', true).connect(
            "mongodb+srv://<name>:<pw>@<cluster>.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=<cluster>"
        )
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB