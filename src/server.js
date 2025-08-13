require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./route/web')


const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app);


//use web route
app.use('/', webRoute);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
