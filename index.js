//const links = document.querySelector('a')

//links.addEventListener('click', (event) => {
  // отменяем действие по умолчанию. Перехода по ссылке не будет
  //event.preventDefault()
//})
const btnEn = document.querySelector(".btnEn");
const btnRu = document.querySelector(".btnRu");
const cool = document.querySelector(".cool");
const web = document.querySelector(".web");

btnRu.addEventListener("click",(event) => {
  cool.textContent = "класс";
  web.textContent = "сайт";

})
btnEn.addEventListener("click",(event) => {
cool.textContent = "cool";
})
