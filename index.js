require('dotenv').config()
const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('/', (req, res) => {
    res.json({ message: 'ready', app: 'listening...' })
})

app.listen(process.env.APP_PORT, () => {
    console.log('Listening...')
})