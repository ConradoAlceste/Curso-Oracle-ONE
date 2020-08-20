var campoFiltro = document.querySelector("#filtrar-tabela");
//console.log(campoFiltro);

campoFiltro.addEventListener("input", function(){
//   console.log(this.value);
//   var texto = this.value;
//   console.log(texto.length);

   //A variável pacientes é um array com o conteúdo das tr's dos pacientes.
   var pacientes = document.querySelectorAll(".paciente");
   //console.log(pacientes);
   if(this.value.length >0){
      for(var i = 0; i < pacientes.length; i++){
         var paciente = pacientes[i];
         //Captura o nome do paciente[i] dentro da tr selecionada
         var tdNome = paciente.querySelector(".info-nome");
         var nome = tdNome.textContent;
         //console.log(nome);
         //console.log(pacientes[i]);
         console.log(this.value.length);
         // procura por texto "case insensitive - i"
         var expressao = new RegExp(this.value, "i");
         if(!expressao.test(nome)) {
            //console.log(nome);
            //console.log(this.value);
            paciente.classList.add("invisivel");
         } else {
            paciente.classList.remove("invisivel");
         }
      }
   }else{
      for(var i = 0; i < pacientes.length; i++){
         var paciente = pacientes[i];
         paciente.classList.remove("invisivel");
      }
   }
});
