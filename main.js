//Acessando e manipulando o elemento HTML com o ID "cep" por meio da variável cep
const cep = document.querySelector("#cep");

const preencheFormulario = (resultado) => {
  let idDoCampo;
  for (idDoCampo in resultado) {
    if (document.querySelector("#" + idDoCampo)) {
      document.querySelector("#" + idDoCampo).value = resultado[idDoCampo];
    }
  }
};

cep.addEventListener("blur", (evento) => {
  let busca = cep.value.replace("-", "");
  const options = {
    method: "GET",
  };

  fetch(`https://viacep.com.br/ws/${busca}/json/`, options)
    .then((response) => {
      //response.json() obtem os dados JSON da resposta. data é o objeto JSON obtido, contendo informações sobre o CEP.
      response.json().then((data) => preencheFormulario(data));
    })
    //catch é utilizado para lidar com erros na requisição.
    .catch((evento) => console.log("Deu Erro: " + evento, message));
});
