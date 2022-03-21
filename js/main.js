"use strict";
const form1 = document.querySelector(".js-newCollapsed");
form1.classList.remove("collapsed");
const list = document.querySelector(".js-list");

const kitten1Image = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const card1 = "Anastacio";
const race1 = "British Shorthair";
const description1 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const content1 = `<li class = "card"><article><img class="card_img" src = "${kitten1Image}"/> <h3 class = "card_title"> ${card1}</h3> <h4 class= "card_race">${race1}</h4> <p class="card_description">${description1}</p></article></li>`;

const kitten2Image = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const card2 = "Fiona";
const race2 = "British Shorthair";
const description2 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const content2 = `<li class = "card"><img clas= "card_img" src = "${kitten2Image}"/> <h3 class= "card_title"> ${card2}</h3> <h4 class = "card_race">${race2}</h4> <p class = "card_description">${description2}</p></li>`;

const kitten3Image = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const card3 = "Cielo";
const race3 = "British Shorthair";
const description3 = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const content3 = `<li class = "card"><img class = "card_img" src = "${kitten3Image}"/> <h3 class = "card_title"> ${card3}</h3> <h4 class = "card_race">${race3}</h4> <p class = "card_description">${description3}</p></li>`;

list.innerHTML = content1 + content2 + content3;









