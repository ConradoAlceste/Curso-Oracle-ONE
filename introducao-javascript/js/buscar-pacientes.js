var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
   console.log("Buscar pacientes");

   // Objeto do Java responsável para fazer requisições http
   // Cria variável para nova requisição
   var xhr = new XMLHttpRequest();
   // Prepara a requisição
   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

   // Prepara para ouvir a requisição
   xhr.addEventListener("load", function(){
      // Cria variável para tornar visível o span de erro caso ocorra erro na busca dos clientes
      var erroAjax = document.querySelector("#erro-ajax");

      if(xhr.status == 200){

         erroAjax.classList.add("invisivel");
         // Resposta vem no formato JSON (JavaScript Object Notation)
         var resposta = xhr.responseText;
         console.log(typeof resposta);

         // O retorno é uma string no formato JSON. Para transformá-la num array
         // usa-se o parser do JSON:
         var pacientes = JSON.parse(resposta);
         //console.log(pacientes);
         //console.log(typeof pacientes);

         pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
         });
      }else{
         erroAjax.classList.remove("invisivel");
      }
   });
   // envia a requisição
   xhr.send();

});
