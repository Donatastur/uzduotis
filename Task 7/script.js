/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};
console.log(audi);
const showObjectKeysMain = Object.keys(audi);
const showObjectKeys = Object.keys(audi).map((key) => [key, audi[key]]);
console.log(showObjectKeysMain);
console.log(showObjectKeys);
