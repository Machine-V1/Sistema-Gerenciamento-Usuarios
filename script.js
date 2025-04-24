let btnEnviar = document.getElementById("btn-enviar");
let btnConsulta = document.getElementById("btn-consulta");
class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.senha = senha;
  }
  consultarDados() {
    return { nome: this.nome, senha: this.senha };
  }
}
let usuarioInstancia = [];
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  let nome = document.getElementById("input-nome").value;
  let senha = document.getElementById("input-senha").value;
  usuarioInstancia.push(new Usuario(nome, senha));
});
listaHtmlElement = document.getElementById("lista-consulta");
btnConsulta.addEventListener("click", () => {
  usuarioInstancia.forEach((usuario, index) => {
    console.log(usuario.consultarDados());
    let { nome, senha } = usuario.consultarDados();
    let linha = document.createElement("li");
    linha.appendChild(
      document.createTextNode(`ID: ${index} Nome: ${nome} Senha: ${senha}`)
    );
    listaHtmlElement.appendChild(linha);
  });
  console.log(usuarioInstancia);
  // ´´
});
