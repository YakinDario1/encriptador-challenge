function encriptar() {
    
    var texto = document.getElementById("encriptar").value.toLowerCase();
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/i/igm, "imes");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";

    const resultado = `<p id="cifrado">${txtcifrado}</p>`;

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("copiar").style.display = "inherit";

}
function copiar(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("botonCopiar").style.border = "5px solid #038C3E";
    document.getElementById('botonCopiar').innerText = "Copiado";
    document.getElementById("botonCopiar").style.color = "#038C3E";
  }


