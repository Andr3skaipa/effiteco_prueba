
  function Validar(){
    var Nombre = document.getElementById("Nombre").value;
    var Contraseña = document.getElementById("Contraseña").value;
    return firebase.database().ref('usuarios/'+Nombre).once('value').then(function(snapshot) {
      var PswBd = snapshot.val().Contraseña;
      if(Contraseña == PswBd){
        alert("Nombre y contraseña validos")
        location.href="home.html";
      }else{
        alert("Nombre y contraseña invalidos, Prueba registrandote :)")}
    });

  }

  function Registrese(){
    console.log("Registrandome");
    location.href="formulario.html";
  }
