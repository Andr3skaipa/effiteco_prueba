
function Registrame(){
    var database = firebase.database();
    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Telefono = document.getElementById("Telefono").value;
    var Direccion = document.getElementById("Direccion").value;
    var Contraseña = document.getElementById("Contraseña").value;
    var userConect = database.ref("usuarios/"+Nombre);
    var newUsuario = userConect.set({
        Apellido:Apellido,
        Telefono:Telefono,
        Direccion:Direccion,
        Contraseña:Contraseña      
    })
    
    var r = confirm("Ingreso Exitoso, Ya puedes ingresar a la aplicación");
      if (r == true) {
        location.href='login.html';
      } else {
        location.href='formulario.html';
      }
  }

  function Login(){
    location.href='login.html';
  }
