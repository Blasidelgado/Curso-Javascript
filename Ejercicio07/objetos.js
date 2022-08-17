const personalData = {
    nombre: "Blas", 
    apellido: "Delgado",
    edad: 30,
    altura: 1.69,
    eresDesarrollador: true
};

const age = personalData.edad;
//console.log(age);

const arr = [personalData];
const amigo1 = {
    nombre: "Juan", 
    apellido: "Izquierdo",
    edad: 35,
    altura: 1.72,
    eresDesarrollador: false
};
const amigo2 = {
    nombre: "Pedro", 
    apellido: "Poratti",
    edad: 24,
    altura: 1.85,
    eresDesarrollador: false
};
arr.push(amigo1, amigo2);
//console.log(arr);

const asc = arr.sort((a, b) => b.edad - a.edad)
//console.log(arr);

