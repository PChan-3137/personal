import {profileData} from "./data.js";
import { skillData } from "./data.js";
const profileDatas = profileData; 
const skillDatas = skillData;
const Pbtn = document.querySelectorAll(".profile-tab");
const Sbtn = document.querySelectorAll(".skill-tab");
const Pcontent = document.getElementById("profile-content");
const Scontent = document.getElementById("skill-grid");

function profileRender(category) {
  Pcontent.innerHTML = "";

  const filtered = profileDatas.filter(p => p.category.includes(category));

  filtered.forEach(content => {
    const text = document.createElement("p");
    text.className = "profile-content-item";
    text.textContent = `${content.name}`;
    const textsub = document.createElement("p")
    textsub.className = "profile-content-item-sub";
    textsub.textContent = `${content.sub}`;
    Pcontent.appendChild(text);
    Pcontent.appendChild(textsub);
  });
}

function skillRender(category){
  Scontent.innerHTML = "";
  const filtered = skillDatas.filter(p => p.category.includes(category));

  filtered.forEach(content => {
    const card = document.createElement("div");
    card.className = "skill-card";

    const image = document.createElement("img");
    image.className = "skill-image"
    image.src = `${content.image}`

    const text = document.createElement("p");
    text.className = "skill-name";
    text.textContent = content.name;

    const textsub = document.createElement("p");
    textsub.className = "skill-sub";
    textsub.textContent = content.sub;
    card.appendChild(image);
    card.appendChild(text);
    card.appendChild(textsub);
    Scontent.appendChild(card);
  });
}


Pbtn.forEach(tab => {
  tab.addEventListener("click", () => {
    Pbtn.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    profileRender(tab.dataset.category);
  });
});

Sbtn.forEach(tab => {
  tab.addEventListener("click", () => {
    Sbtn.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    skillRender(tab.dataset.category);
  });
});

profileRender("edu");
skillRender("stack");