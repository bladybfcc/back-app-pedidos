// imports

const express = require("express");
const morgan = require("morgan");

// importando el modulo rutas

const routes = require("./routes");

//config

const app = express();
app.use(morgan("dev"));

//habilitar rutas

routes.rutas(app);

//levantar servidor

app.listen(3000, () => {
    console.log("Servidor levantado en: ");
});