import { defaultPhones, googlePhones, facebookPhones } from "./phoneNumber.js";

const phoneList = document.querySelector(".phone");

function changePhones(phones) {
  phones.forEach((phone) => {
    const phoneLink = phone.replace(/[() -]/g, '');
    phoneList.insertAdjacentHTML("beforeend", `<li><a href="tel:${phoneLink}">${phone}</a></li>`);
  });
}

let href = window.location.href;
let search = window.location.search;

// console.log(href);
// console.log(search);

let utmArr = [];

if (href.indexOf("?") != -1) {
  href = href.slice(0, href.indexOf("?"));
  search = search.slice(1).toLowerCase();
  utmArr = search.split("&");

  //   console.log(utmArr);

  utmArr.map((utm) => {
    localStorage.setItem(utm.split("=")[0], utm.split("=")[1]);
  });
}

if (localStorage.getItem("utm_source") === "google") {

  changePhones(googlePhones);
} else if (localStorage.getItem("utm_source") === "facebook") {

  changePhones(facebookPhones);

} else {
  changePhones(defaultPhones);
}
