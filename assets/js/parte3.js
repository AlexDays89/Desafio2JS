let boton = document.querySelector(".boton");

boton.addEventListener("click", function() {
    let digito1 = document.querySelector(".digito1").value;
    let digito2 = document.querySelector(".digito2").value;
    let digito3 = document.querySelector(".digito3").value;
    let alerta1 = document.querySelector(".password1");
    let alerta2 = document.querySelector(".password2");

    if (digito1 === "9" && digito2 === "1" && digito3 === "1") {
        alerta1.innerHTML = "Password 1 correcto";
        alerta2.innerHTML = "";
    } else if (digito1 === "7" && digito2 === "1" && digito3 === "4" && alerta1.innerHTML === "Password 1 correcto") {
        alerta2.innerHTML = "Password 2 correcto";
    } else {
        alerta1.innerHTML = "Password incorrecto";
        alerta2.innerHTML = "";
    }
});