require('dotenv').config;
const express = require('express');
const cors = require('cors');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express();
const port = process.env.port || 8888;
const hostname = process.env.hostname;

// app.use(cors({ origin: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


//config template engine 
configViewEngine(app);


//khai bao route
app.use('/',webRoutes)
// connect()

app.listen(port, hostname,() => {
    console.log(`loading ...  http://localhost:${port}`);
});