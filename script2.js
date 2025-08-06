let user = JSON.parse(localStorage.getItem("user"));
let ism = document.getElementById("ism");
let h1 = document.getElementById("h1");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let logout = document.getElementById("logout");

console.log(user);

h1.textContent = user.ism;
p1.textContent = ` ${user.coin}`;
p2.textContent = ` ${user.hp}`;

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "index.html";
});

function islocalstorage() {
  if (!localStorage.getItem("user")) {
    window.location.href = "index.html";
  }
}
islocalstorage();
