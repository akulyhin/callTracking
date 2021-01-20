const defaultPhones = ["+380987452616", "+380981234567", "+380501234567"];
const googlePhones = ["+380Google", "+380Google", "+380Google"];
const facebookPhones = ["+380Facebook", "+380Facebook", "+380Facebook"];

const phoneList = document.querySelector(".phone");

function changePhones(phones) {
  phones.forEach((phone) => {
    phoneList.insertAdjacentHTML("afterbegin", `<li>${phone}</li>`);
  });
}

let href = window.location.href;
let search = window.location.search;

console.log(href);
console.log(search);

let utmArr = [];

if (href.indexOf("?") != -1) {
  href = href.slice(0, href.indexOf("?"));
  search = search.slice(1);
  utmArr = search.split("&");

  console.log(utmArr);

  utmArr.map((utm) => {
    localStorage.setItem(utm.split("=")[0], utm.split("=")[1]);
  });
}

if (localStorage.getItem("utm_source") === "google") {
  console.log("Google");
  changePhones(googlePhones);
} else if (localStorage.getItem("utm_source") === "facebook") {
  console.log("Facebook");
  changePhones(facebookPhones);
} else {
  changePhones(defaultPhones);
}
