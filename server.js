// Import Express and define server port
const express = require("express");
const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Define ("/")
app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});
