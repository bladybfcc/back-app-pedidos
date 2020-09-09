const listar = function(req, res) {
    res.json({ mensaje: "Listar Clientes" });
};

const mostrar = function(req, res) {
    res.json({ mensaje: "Mostrar Clientes" });
};

const guardar = function(req, res) {
    res.json({ mensaje: "Guardar Clientes" });
};

const modificar = function(req, res) {
    res.json({ mensaje: "Modificar Clientes" });
};

const eliminar = function(req, res) {
    res.json({ mensaje: "Eliminar Clientes" });
};

module.exports = {
    listar,
    mostrar,
    guardar,
    modificar,
    eliminar,
};