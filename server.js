// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
const express = require("express");

// -----------------------------------------------------
// Application Object
// -----------------------------------------------------
const app = express();

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------

// -----------------------------------------------------
// Routes
// -----------------------------------------------------

// -----------------------------------------------------
// GET requests
// -----------------------------------------------------
app.get("/", (req, res) => {
  res.send(`
  99 bottles of beer on the wall<br>
  <a href="/98">take one down, pass it around</a>
  `);
});

app.get("/:amount", (req, res) => {
  const amount = Number(req.params.amount);
  if (amount === 0) {
    res.send(`
    <a href="/">start over</a>
    `);
  } else {
    res.send(`
    ${amount} bottles of beer on the wall<br>
    <a href="/${amount - 1}">take one down, pass it around</a>`);
  }
});

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
app.listen(3000, () => {
  console.log(`listening in port 3000`);
});
