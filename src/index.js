// imports

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// importando el modulo rutas

import routes from "./routes";
import config from "./config/config";

//config

const app = express();
app.use(morgan("dev"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("port", process.env.PORT || config.port);
//console.log(app.get("port"));

//app.set("nombre", "Juan");
//console.log(app.get("nombre"));

//configurando base de datos

mongoose
    .connect("mongodb://localhost:27017/app-pedido", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => {
        console.log("BD CONECTADO");
    })
    .catch((error) => {
        console.log("ERROR DE CONEXION: ", error);
    });

//habilitar rutas

routes.rutas(app);

//levantar servidor

app.listen(app.get("port"), () => {
    console.log(`Servidor levantado en: 127.0.0.1:${app.get("port")}`);
});