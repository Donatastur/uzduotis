/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clickButton = document
  .querySelector("#btn__element")
  .addEventListener("click", clickMe);
let count = 0;

function clickMe(data) {
  console.log(data);
  count = count + 1;
  console.log(count);
  document.querySelector("#btn__state").textContent = count;
}
