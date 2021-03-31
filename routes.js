const express = require('express');
const CheckCep = require('./controllers/cepAPI');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("cep", { cep: undefined })
});

router.get("/:cep", (req, res) => {
    cepValue = String(req.params.cep)
    cepValue = cepValue.replace("-", "")

    if (cepValue.length != 8) { return res.send("Please enter a valid CEP") }
    CheckCep(parseInt(cepValue), function () {
        res.json(this.endereço)
    })
});

router.post("/", async (req, res) => {
    var cepInput = parseInt(req.body.inCEP.replace("-", ""))

    const info = await CheckCep(cepInput)
    res.render("cep", info)

    // Parte de uma forma estranha de resolver
    /* checkCep(cepInput, function () {
        res.render("cep", {
            cep: cepInput,
            endereço: this.endereço,
            rua: this.rua,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado
        })
    }, res
    ) */

})


// ROTAS CSS
router.get("/css/styles.css", (req, res) => {
    res.sendFile(__dirname + "/src/css/styles.css")
})

module.exports = router;