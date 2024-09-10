const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes/router');

app.use(bodyParser.json());
app.use("/common", router)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

module.exports = app;