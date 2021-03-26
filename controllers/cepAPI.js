const axios = require('axios')


function CheckCep(cepNumber, postCallBack, res){
    if(String(cepNumber).length!=8){
        res.render("cep")
        return false
    }

    const BASE_URL = "https://viacep.com.br/ws/"+cepNumber+"/json/"

    axios
        .get(BASE_URL)
        .then(function (response){
            //console.log(response.data)
            this.endereço = response.data
            this.rua = response.data["logradouro"]
            this.bairro = response.data["bairro"]
            this.cidade = response.data["localidade"]
            this.estado = response.data["uf"]
            
            response => (this.cepJsonInfo = response.data)
            postCallBack()
        })
        .catch(function(erro){
            console.log("there is an error")
        })
}

module.exports = CheckCep;