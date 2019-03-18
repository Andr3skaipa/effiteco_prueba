var numeros="0123456789";
var letras="qwertyuiopasdfghjklñzxcvbnm ";

function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function tiene_letras(texto){
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
function validarSiNumero(numero){
    var valor = document.getElementById(numero).value;
    if(tiene_numeros(valor) == 0){
    console.log("true")
    alert("El campo Telefono debe ser un número");
      document.getElementById(numero).value="";
    }else{console.log("false")
        
    }
      
  }

  function soloLetras(e){
    var aux = document.getElementById(e).value;
    if(tiene_letras(aux) ==0)
    {console.log("true")
    alert("Este campo solo acepta texto");
    document.getElementById(e).value="";
    }else{console.log("false")
        
}
    
   
 }