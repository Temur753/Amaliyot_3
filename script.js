let form = document.getElementById("form");
let login = document.getElementById("login");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let hideSee = document.getElementById("hideSee");

let error = document.getElementById("error");

alert("login: 12345, parol: 2024");

let user = {
  ism: "Temurbek",
  login: "12345",
  parol: 2024,
  coin: 214,
  hp: 1000,
  group: "nf-2308",
};

hideSee.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    hideSee.textContent = "hide";
  } else {
    password.type = "password";
    hideSee.textContent = "see";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (login.value == user.login && password.value == user.parol) {
    window.location.href = "index2.html";

    localStorage.setItem("user", JSON.stringify(user));
  } else {
    error.textContent = "Login yoki parol xato!";
    error.style.color = "red";
    login.value = "";
    password.value = "";
  }
});

function isbutton() {
  if (login.value.trim() !== "" && password.value.trim() !== "") {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = originalColor = "orangered";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#F69E86";
  }
}

login.addEventListener("input", isbutton);
password.addEventListener("input", isbutton);

function islocalstorage() {
  if (localStorage.getItem("user")) {
    window.location.href = "index2.html";
  }
}

islocalstorage();
