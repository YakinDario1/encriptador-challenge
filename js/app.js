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

    const resultado = `<p>${txtcifrado}</p>`;

    document.getElementById("resultado").innerHTML = resultado;

}