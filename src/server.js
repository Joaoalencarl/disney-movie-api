const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT || 8000

const routes = require('./routes')

app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})