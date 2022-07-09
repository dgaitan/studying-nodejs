require('dotenv').config()
const express = require('express')
const bodyParse = require('body-parser')
const helmet = require('helmet')

const appRoutes = require('./routes')

const app = express()

app.use(helmet())
app.use(bodyParse.json())

app.get('/', (req, res) => {
    res.json({ message: 'ready', app: 'listening...' })
})
app.use(appRoutes)

app.listen(process.env.APP_PORT, () => {
    console.log('Listening...')
})