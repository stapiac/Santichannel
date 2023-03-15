const formulariodata = document.getElementById("botonForm");

formulariodata.addEventListener("click", (e) => {
  e.preventDefault();

  const Nombre = document.getElementById("Nombre").value;
  const correoelectronico = document.getElementById("correoelectronico").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  object = {
    senderName: Nombre,
    senderEmail: correoelectronico,
    senderPhone: telefono,
    message: mensaje,
  };

  json = JSON.stringify(object);

  fetch(
    "https://be47q9xtx3.execute-api.us-east-1.amazonaws.com/default/emailHander",
    {
      method: "POST",
      body: json,
    }
  )
    .then((response) => response.text())
    .then((response) => {
      window.alert(response);
      document.getElementById("Nombre").value = "";
      document.getElementById("correoelectronico").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("mensaje").value = "";
    })
    .catch((error) =>
      window.alert("El mensaje no se pudo enviar, por favor intentar mas tarde")
    );
});
