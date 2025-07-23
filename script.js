const users = {
  "Carlos": { role: "admin", password: "CA1234" },
  "Laura": { role: "admin2", password: "LA5678" },
  "Ana": { role: "consult", password: "AN2468" },
  "Mario": { role: "consult", password: "MA1357" },
  "Pablo": { role: "consult", password: "PA1122" },
  "Rosa": { role: "consult", password: "RO9988" },
  "Fernanda": { role: "admin", password: "FE0001" }
};

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username].password === password) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
    document.getElementById("user-name").textContent = username;

    const role = users[username].role;
    if (role === "admin" || role === "admin2") {
      document.getElementById("upload-btn").style.display = "inline-block";
    }

    document.getElementById("upload-btn").addEventListener("click", () => {
      document.getElementById("upload-form-container").style.display = "block";
    });

  } else {
    document.getElementById("login-error").textContent = "Clave o usuario incorrecto";
  }
});
