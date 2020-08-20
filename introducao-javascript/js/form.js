var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
   event.preventDefault();

   var form = document.querySelector("#form-adiciona");
   //extração de informações do paciente do form
   var paciente = obtemDadosDoPacienteNoFormulario(form);

   //cria a tr e a td do paciente
   // Mudou para a função adicionaPacienteNaTabela
   //var pacienteTr = montaTr(paciente);
   //console.log(pacienteTr);

   var erros = validaPacientes(paciente);
   console.log(erros);

   //testa string de retorno
   if(erros.length > 0) {
      exibeMensagensDeErro(erros);
      return;
   }

   // Mudou para a função adicionaPacienteNaTabela
   //adiciona paciente na tabela
   //var tabela = document.querySelector("#tabela-pacientes");
   //tabela.appendChild(pacienteTr);
   adicionaPacienteNaTabela(paciente);

   form.reset();

/*   var formAdiciona = document.querySelector("#form-adiciona");
   var forma = formAdiciona.innerHTML;
   console.log(forma);
*/
   var mensagensErro = document.querySelector("#mensagens-erro");
//   var mensagens = mensagensErro.innerHTML;
//   console.log(mensagens);
   mensagensErro.innerHTML = "";

//   mensagensErro.innerHTML = "<li>Exemplo de escrita no HTML</li>";
//   var mensagensA = mensagensErro.innerHTML;
//   console.log(mensagensA);
//   mensagensErro.innerHTML = "";

});

function obtemDadosDoPacienteNoFormulario(form) {
   //cria objeto paciente com seus elementos
   var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
   }
   return paciente;
}

function montaTr(paciente) {
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");

/*   var nomeTd = montaTd(paciente.nome, "info-nome");
   var pesoTd = montaTd(paciente.peso, "info-peso");
   var alturaTd = montaTd(paciente.altura, "info-altura");
   var gorduraTd = montaTd(paciente.gordura, "info-gordura");
   var imcTd = montaTd(paciente.imc, "info-imc");

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);
*/
   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

   return pacienteTr;
}

function montaTd(dado, classe) {
   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);

   return td;
}

/*function validaPaciente(paciente) {
   if(validaPeso(paciente.peso) && validaAltura(paciente.altura)) {
         return "";
   } else{
      if(!validaPeso(paciente.peso)) {
         return "Peso inválido!";
      } else{
         return "Altura inválida!";
      }
   }
}
*/

function validaPacientes(paciente){
   var erros = [];

//   if(paciente.nome == ""){ ou
   if(paciente.nome.length == 0){
      erros.push("Nome em branco");
   }
   if(paciente.peso.length == 0){
      erros.push("Peso em branco");
   }
   if(paciente.altura.length == 0){
      erros.push("Altura em branco");
   }
   if(paciente.gordura.length == 0){
      erros.push("Gordura em branco");
   }
   if(!validaPeso(paciente.peso) && paciente.peso.length > 0){
      erros.push("Peso inválido!");
   }
   if(!validaAltura(paciente.altura) && paciente.altura.length > 0){
      erros.push("Altura inválida!");
   }
   return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente){
      var pacienteTr = montaTr(paciente);
   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);
}
