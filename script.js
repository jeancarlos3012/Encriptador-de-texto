const textArea = document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    mensaje.textContent = textEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}/*
let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"]["a","ai"]];
console.log(matrizCodigo)*/
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textDesencriptado= desencriptar(textArea.value);
    mensaje.textContent=textDesencriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    const textEncriptado = mensaje.textContent;
    navigator.clipboard.writeText(textEncriptado).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

