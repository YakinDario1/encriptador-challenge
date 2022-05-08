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
    const resultado = `<p id="cifrado">${txtcifrado}</p>`;
    
    if (document.getElementById("imgDer") && document.getElementById("texto")) {
        document.getElementById("texto").style.display = "none";
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("encriptar").value = " ";
        document.getElementById("resultado").innerHTML = resultado;
    } else { 
        document.getElementById("resultado").innerHTML = resultado;
    }


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

  function desencriptar() {
    var texto = document.getElementById("encriptar").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    const resultado2 = `<p id="cifrado">${txtcifrado}</p>`;
    
      

    if (document.getElementById("imgDer") && document.getElementById("texto")) {
        document.getElementById("texto").style.display = "none";
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("encriptar").value = " ";
        document.getElementById("resultado").innerHTML = resultado2;
    } else { 
        document.getElementById("resultado").innerHTML = resultado2;
    }

    document.getElementById("copiar").style.display = "inherit";
  }
