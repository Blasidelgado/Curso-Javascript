function returnTrue() {
    return true;
}
//console.log(returnTrue());

function async() {
    return new Promise(resolve => setTimeout(resolve =>
        console.log("hola soy una promesa"), 5000)
    )};
async();

function* generator() {
    let num = 0;
    while (true) {
        if (num%2===0) yield num;
        num++
    }
};
const even = generator();
//console.log(even.next().value);
//console.log(even.next().value);
//console.log(even.next().value);
//console.log(even.next().value);
//console.log(even.next().value);
//console.log(even.next().value);
