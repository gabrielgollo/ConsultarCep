const axios = require('axios')


async function CheckCep(cepNumber) {
    if (String(cepNumber).length != 8) {
        return false
    }

    const BASE_URL = "https://viacep.com.br/ws/" + cepNumber + "/json/"
    try {
        const { data } = await axios.get(BASE_URL)
        return {
            cep: cepNumber,
            endereço: data,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
        }
    } catch (err) {
        console.log(err.message)
    }


    // Parte de uma forma estranha de se resolver
    /* .then(function (response) {
        //console.log(response.data)
        this.endereço = response.data
        this.rua = response.data["logradouro"]
        this.bairro = response.data["bairro"]
        this.cidade = response.data["localidade"]
        this.estado = response.data["uf"]

        response => (this.cepJsonInfo = response.data)
        postCallBack()
    })
    .catch(function (erro) {
        console.log("there is an error")
    }) */

}

module.exports = CheckCep;