const express = require('express');
const router = require('./routes.js');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


// Configurações
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    // Rotas
    app.use("/", router);
      





app.listen(port, ()=>{
    console.log(`Server Running!! at http://localhost:${port}`)
});