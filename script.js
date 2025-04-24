let btnEnviar = document.getElementById("btn-enviar");
let btnConsulta = document.getElementById("btn-consulta");
// Criando Classe Usuario
class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.senha = senha;
  }
  consultarDados() {
    // retornando nome e senha em um objeto
    return { nome: this.nome, senha: this.senha };
  }
  mudarSenha(senhaAlt) {
    this.senha = senhaAlt;
  }
}
let usuarioInstancia = []; // criando um array pra receber todos os Usuarios
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  // pegando o valor do nome e senha do input
  let nome = document.getElementById("input-nome").value;
  let senha = document.getElementById("input-senha").value;
  document.getElementById("input-nome").value = "";
  document.getElementById("input-senha").value = "";
  // Colocando na Array
  usuarioInstancia.push(new Usuario(nome, senha));
});
// pegando elemento HTML do comeco da lista
let listaHtmlElement = document.getElementById("lista-consulta");

btnConsulta.addEventListener("click", () => {
  // para cada usuario

  // Deletando todos os filhos pra nao repetir a consulta
  while (listaHtmlElement.firstChild) {
    listaHtmlElement.firstChild.remove();
  }

  usuarioInstancia.forEach((usuario, index) => {
    console.log(usuario.consultarDados());

    // Desconstruindo o objeto do retorno no metodo
    let { nome, senha } = usuario.consultarDados();
    // Criando uma linha

    let linha = document.createElement("li");

    linha.appendChild(
      // preenchendo os parametros dentro do linha
      document.createTextNode(`ID: ${index} || Nome: ${nome} || Senha: ${senha}`)
    );
    // colocando dentro do ul
    listaHtmlElement.appendChild(linha);
  });
});

let btnMudarSenha = document.getElementById("btn-mudar-senha");

btnMudarSenha.addEventListener("click", (event) => {
  event.preventDefault();
  let confNome = document.getElementById("confirmar-nome").value;
  let confSenha = document.getElementById("confirmar-senha").value;
  let inputMudarSenha = document.getElementById("input-mudar-senha").value;

  let usuario = usuarioInstancia.find(x => x.nome == confNome && x.senha == confSenha);
  if(usuario){
    usuario.mudarSenha(inputMudarSenha)

  }else{
    window.alert("Dados Incorretos")
  }
});
