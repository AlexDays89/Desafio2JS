
imagen1 = document.querySelector(".imagen1");
imagen1.style = "border = none; width: 50%; height: auto;"

imagen1.addEventListener("click", function(){
    if (imagen1.style.border == "2px solid red"){
        imagen1.style.border = "none"
    }
    else{
        imagen1.style.border = "2px solid red"
    }
});