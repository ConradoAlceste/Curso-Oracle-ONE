/* Se usar "table", o duplo clique irá subir até o elemento table e pode apagar também o
cabeçalho. Alterando para #tabela-pacientes, apenas os tds são apagados
var tabela = document.querySelector("table");

Uma alternativa é reconhecer a tag que foi clicada dentro do addEventListener:
   if(event.target.tagName == "TD") {
      event.target.parentNode.remove();
}
*/
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
/*   var alvoDoEvento = event.target;
   var paiDoAlvo = alvoEvento.parentNode;
   paiDoAlvo.remove();
*/
   event.target.parentNode.classList.add("fadeOut");
   setTimeout(function(){
      event.target.parentNode.remove();
   }, 500);
});

/*
pacientes.forEach(function(paciente) {
   paciente.addEventListener("dblclick", function(){
      this.remove();
      console.log("Fui clicado com duplo click");
   });
});
*/
