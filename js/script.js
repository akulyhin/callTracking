import { defaultPhones, googlePhones, facebookPhones } from "./phoneNumber.js";

//Определяем блок по селектору для записи телефонов
const phoneList = document.querySelector(".phone");

// функция перебора массива телефонов и вставки в наш блок
function changePhones(phones) {
  phones.forEach((phone) => {
    const phoneLink = phone.replace(/[() -]/g, '');
    phoneList.insertAdjacentHTML("beforeend", `<li><a href="tel:${phoneLink}">${phone}</a></li>`);
  });
}

// Переменные с текущей ссылкой и корнем после слеша
let href = window.location.href;
let search = window.location.search;

// console.log(href);
// console.log(search);

// массив для будущих ютм
let utmArr = [];

// Определяем ютм, разделям их по знаку "&", записываем их раздельно в массив с уменшенным регистром
if (href.indexOf("?") != -1) {
  search = search.slice(1).toLowerCase();
  console.log(search);
  utmArr = search.split("&");
  console.log(utmArr);

// перебираем массив и разбиваем каждый элемент по разделителю "=" и записываем в LocalStorage
  utmArr.map((utm) => {
    localStorage.setItem(utm.split("=")[0], utm.split("=")[1]);
  });
}

// определяем по ключу, если utm_source равен нашей строке, то отправляем в функцию необходимый массив телефонов
if (localStorage.getItem("utm_source") === "google") {

  changePhones(googlePhones);
} else if (localStorage.getItem("utm_source") === "facebook") {

  changePhones(facebookPhones);

} else {
  changePhones(defaultPhones);
}
