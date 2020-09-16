"use strict";

const clienteController = require("./../controllers/clienteController");

const productoController = require("./../controllers/productoController");

const pedidoController = require("./../controllers/pedidoController");
/**
 *Necesita enviar app de express
 *
 *@param app:express
 */


module.exports.rutas = app => {
  //rutas de Login
  //rutas de Usuarios
  //rutas de Clientes
  app.get("/cliente", clienteController.listar);
  app.get("/cliente/:id", clienteController.mostrar);
  app.post("/cliente", clienteController.guardar);
  app.put("/cliente/:id", clienteController.modificar);
  app.delete("/cliente/:id", clienteController.eliminar); //rutas de Producto

  app.get("/producto", productoController.listar);
  app.get("/producto/:id", productoController.mostrar);
  app.post("/producto", productoController.guardar);
  app.put("/producto/:id", productoController.modificar);
  app.delete("/producto/:id", productoController.eliminar); //rutas de Pedidos

  app.get("/pedido", pedidoController.listar);
  app.get("/pedido/:id", pedidoController.mostrar);
  app.post("/pedido", pedidoController.guardar);
  app.put("/pedido/:id", pedidoController.modificar);
  app.delete("/pedido/:id", pedidoController.eliminar);
};