const express = require('express');
const CheckCep = require('./controllers/cepAPI');
const checkCep = require('./controllers/cepAPI');
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("cep", {cep: undefined})
});

router.get("/:cep", (req, res)=>{
    if(String(req.params.cep).length != 8){return res.send("Please enter a valid CEP")}
    
    CheckCep(parseInt(req.params.cep), function() {
        res.json(this.endereço)
    })
});

router.post("/", (req, res)=>{
    var cepInput = parseInt(req.body.inCEP.replace("-", ""))
    checkCep(cepInput, function() {
        res.render("cep", {    
            cep: cepInput,
            endereço: this.endereço,
            rua: this.rua,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado
        })}, res 
)})


// ROTAS CSS
router.get("/css/styles.css", (req, res)=>{
    res.sendFile(__dirname + "/src/css/styles.css")
})

module.exports = router;