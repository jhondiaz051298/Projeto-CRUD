const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.json({ message: "Bem-vindo a minha API" });
});

require("./src/routes/routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor iniciado + " + PORT);
});

