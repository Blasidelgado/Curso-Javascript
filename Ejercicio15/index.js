const nombre = "Blas Ignacio"
const apellido = "Delgado"

const nombreCompleto = {"nombre": nombre, "apellido": apellido}

//sessionStorage.setItem("nombreCompleto", nombreCompleto)
//localStorage.setItem("nombreCompleto", nombreCompleto)
const d = new Date()
d.setTime(d.getTime() + (2*60*1000));
// document.cookie = "nameExpires=name; expires=" + d.toUTCString();


