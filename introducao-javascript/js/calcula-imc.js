var titulo = document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var clientes = document.querySelector(".clientes");
clientes.textContent = "Meus Clientes";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++) {

   //var pesoValido = true;
   //var alturaValida = true;

   var paciente = pacientes[i];

   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var tdImc = paciente.querySelector(".info-imc");

   var pesoValido = validaPeso(peso);
   var alturaValida = validaAltura(altura);

   if(!pesoValido) {
      console.log("Peso inválido!");
      //pesoValido = false;
      tdImc.textContent = "Peso inválido!";
      paciente.classList.add("paciente-invalido")
   }

   if(!alturaValida) {
      console.log("Altura inválida!");
      alturaValida = false;
      tdImc.textContent = "Altura inválida!";
   }

   if(pesoValido && alturaValida) {
//      var imc = peso / (altura * altura);
//      tdImc.textContent = imc.toFixed(2);
      tdImc.textContent = calculaImc(peso, altura);
   } else {
      //tdImc.textContent = "Peso e/ou Altura inválidos!";
      //paciente.style.backgroundColor = "lightcoral";
      paciente.classList.add("paciente-invalido");
   }
}

function validaPeso(peso) {
   if(peso >= 0.1 && peso <= 300) {
      return true;
   } else {
      return false;
   }
}

function validaAltura(altura) {
   if(altura < 3 && altura > 0.3) {
      return true;
   } else {
      return false;
   }
}

function calculaImc(peso, altura) {
   var imc = 0;
   var imc = peso / (altura * altura);
   return imc.toFixed(2);
}

function mostraMensagem() {
   console.log("Clique do mouse");
}
