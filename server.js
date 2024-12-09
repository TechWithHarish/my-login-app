const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("images"));

// Middleware to parse JSON bodies (for login functionality)
app.use(bodyParser.json());

// Sample credentials (In a real app, this would be stored securely in a database)
const correctUsername = "kalpana";
const correctPassword = "hakani";

// Route to serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to handle login requests
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === correctUsername && password === correctPassword) {
    return res.json({ success: true, message: "Login successful!" });
  } else {
    return res.json({ success: false, message: "Invalid credentials!" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
