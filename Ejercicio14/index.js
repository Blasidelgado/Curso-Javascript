/* const btn = document.querySelector("#btn-main")
btn.addEventListener("click", () => alert ("click en el botón")) */

//jQuery event 

/* $(document).ready(()=> { 
    //code 
}) */

$(() => {
    $("#btn-main").click (() => console.log("Hola, estoy utilizando jQuery")
    )
})