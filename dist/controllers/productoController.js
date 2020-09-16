"use strict";

const listar = function (req, res) {
  res.json({
    mensaje: "Listar Productos"
  });
};

const mostrar = function (req, res) {
  res.json({
    mensaje: "Mostrar Productos"
  });
};

const guardar = function (req, res) {
  res.json({
    mensaje: "Guardar Productos"
  });
};

const modificar = function (req, res) {
  res.json({
    mensaje: "Modificar Productos"
  });
};

const eliminar = function (req, res) {
  res.json({
    mensaje: "Eliminar Productos"
  });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar
};