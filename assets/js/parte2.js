sticker1 = document.querySelector(".cantidad1");
sticker2 = document.querySelector(".cantidad2");
sticker3 = document.querySelector(".cantidad3");
totalstickers = document.querySelector(".totalstickers");
verificar = document.querySelector(".boton");
alerta = document.querySelector(".mensaje");

verificar.addEventListener("click",() => {
    cantidad1 = parseInt(sticker1.value);
    cantidad2 = parseInt(sticker2.value);
    cantidad3 = parseInt(sticker3.value);
    total = cantidad1 + cantidad2 + cantidad3;

    if (total > 10) {
        alerta.innerHTML= "Tienes muchos stickers";
    }
    else {
        alerta.innerHTML= "Tienes " + total + " stickers";
    }
})