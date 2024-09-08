let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
// DOM : DOCUMENT OBJECT MODEL
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username must be at least 6 characters");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!password.match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter");
  } else if (!password.match(upperCaseLetter)) {
    alert("Password must  contain a uppercase letter");
  } else if (!password.match(numbers)) {
    alert("Password must  contain a number or special character");
  } else {
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));
      ``
      users.push({
        email,
        password,
        username,
      });

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email,
            password,
            username,
          },
        ])
      );
    }
    location.href = "../login.html";
  }
});