"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imports
// importando el modulo rutas
//config
const app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.set("port", process.env.PORT || _config.default.port); //console.log(app.get("port"));
//app.set("nombre", "Juan");
//console.log(app.get("nombre"));
//habilitar rutas

_routes.default.rutas(app); //levantar servidor


app.listen(app.get("port"), () => {
  console.log(`Servidor levantado en: 127.0.0.1:${app.get("port")}`);
});