const express = require("express");
require("./db/mongoose");
const booksRoute = require("./routers/books");
const charactersRoute = require("./routers/characters");
const spellsRoute = require("./routers/spells");
const potionsRoute = require("./routers/potions");
const creaturesRoute = require("./routers/creatures");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(booksRoute);
app.use(charactersRoute);
app.use(spellsRoute);
app.use(potionsRoute);
app.use(creaturesRoute);
app.get("/", (req, res) => {
  res.send("it's kind of boring here,check out the routes");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
