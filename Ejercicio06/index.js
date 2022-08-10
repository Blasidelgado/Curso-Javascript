const shopItems = ["Leche", "Huevos", "Cereales", "Jamon", "Queso"];

shopItems.push("Aceite de Girasol");

//console.log(shopItems);

shopItems.pop();

//console.log(shopItems);

const favMovies = [
    {titulo: "El padrino", director: "Francis Lord Coppola", fecha: new Date("1972, 10, 20")},
    {titulo: "Forrest Gump", director: "Robert Zemeckis", fecha: new Date("1994, 07, 06")},
    {titulo: "Toy Story", director: "John Lasseter", fecha: new Date("1995, 11, 22")}
]

const isNewer = favMovies.filter(item => item.fecha > new Date ("2010, 01, 01"));
//console.log(isNewer);

const directors = favMovies.map(item => item.director)
//console.log(directors);

const titles = favMovies.map(item=> item.titulo)
//console.log(titles);

const arr2 = directors.concat(titles)
//console.log(arr2);

const arr3 = [...directors, ...titles]
// console.log(arr3);