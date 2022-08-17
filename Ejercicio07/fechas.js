const today = new Date();
//console.log(today);

const birth = new Date(1992, 05, 18, 20);
//console.log(birth);

const isLater = today > birth;
//console.log(isLater);

const day = birth.getDate();
//console.log(day);
const month = birth.getMonth()+1;
//console.log(month);
const year = birth.getFullYear();
//console.log(year);
