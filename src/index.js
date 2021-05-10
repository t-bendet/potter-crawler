const express = require("express");
require("./db/mongoose");
const bookRoute = require("./routers/book");
const characterRoute = require("./routers/character");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bookRoute);
app.use(characterRoute);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
