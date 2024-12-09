document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send login credentials to the server for validation
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message);
        window.location.href = "credentials.html"; // Redirect to another page after successful login
      } else {
        alert(data.message); // Show error message
      }
    })
    .catch((error) => {
      alert("An error occurred. Please try again.");
      console.error(error);
    });
});
