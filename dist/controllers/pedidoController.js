"use strict";

const listar = function (req, res) {
  res.json({
    mensaje: "Listar Pedidos"
  });
};

const mostrar = function (req, res) {
  res.json({
    mensaje: "Mostrar Pedidos"
  });
};

const guardar = function (req, res) {
  res.json({
    mensaje: "Guardar Pedidos"
  });
};

const modificar = function (req, res) {
  res.json({
    mensaje: "Modificar Pedidos"
  });
};

const eliminar = function (req, res) {
  res.json({
    mensaje: "Eliminar Pedidos"
  });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar
};