//Archivo analizado y fixeado mediante ESLint
// Analizar: "npm run lint"
//Intentar fixear: "npm run lint--fix"

const nombre = "Blas Ignacio";
const apellido = "Delgado";

const estudiante = nombre.concat(" ",apellido);
//console.log(estudiante);
const estudianteMayus = estudiante.toUpperCase();
//console.log(estudianteMayus);
const estudianteMinus = estudiante.toLowerCase();
//console.log(estudianteMinus);
const chars = estudiante.length
//console.log(chars);
const firstChar = nombre[0];
//console.log(firstChar);
const lastChar = apellido.charAt(apellido.length - 1);
//console.log(lastChar);
const estudianteMod = estudiante.replace(/\s/g,"");
//console.log(estudianteMod);
const bool = estudiante.includes(nombre);
//console.log(bool);