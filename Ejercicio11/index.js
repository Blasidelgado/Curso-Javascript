class Estudiante {
    #nombre;
    #asignaturas;
    
    constructor (nombre, asignaturas) {
        this.#nombre = nombre;
        this.#asignaturas = asignaturas
    }

    obtenDatos() {
        let name = this.#nombre;
        let signatures = this.#asignaturas;
        return {name, signatures}
    }
}

const estudiante1 = new Estudiante("Blas Ignacio Delgado", ["Javascript", "HTML", "CSS"]);

console.log(estudiante1.obtenDatos());