const express = require('express')
const app = express()

require('dotenv').config()

const dbConnect = require('./config/db')
dbConnect() // connects to db

app.use(express.json()) // needed to parse the body of the message
app.use('/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    console.log('Hello from route')

    res.send('Hello from express')
})

const port = process.env.PORT || 4001
app.listen(port, () => console.log('Server is up and running at port', port))