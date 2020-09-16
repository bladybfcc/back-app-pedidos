const cliente = require("./../models/Cliente");

const listar = async function(req, res) {
    /* Promesas
                                                          cliente.find().then(datos => {
                                                                  res.json(datos);
                                                              }).catch((err) => {
                                                                  console.log("ERROR: ", err);
                                                              });
                                                          */
    try {
        var datos = await cliente.find();
        res.json(datos);
    } catch (error) {
        console.log("ERROR: ", error);
    }
    //res.json({ mensaje: "Listar Clientes" });
};

const mostrar = async function(req, res) {
    let id = req.params.id;
    //console.log(req.params);

    //Con promesa
    /*
                      cliente
                          .findById(id)
                          .then((clie) => {
                              res.json(clie);
                          })
                          .catch((error) => {
                              console.log("Error en Cliente : ", error);
                              res.json({ mensaje: "Error Clientes" });
                          });
                      */
    //Async await
    try {
        var clie = await cliente.findById(id);
        res.json(clie);
    } catch (error) {
        res.json({ mensaje: "Error Clientes" });
    }
};

const guardar = function(req, res) {
    /*    const clie = new cliente({
                        nombres: "Prueba nombre",
                        apellidos: "Prueba apellidos",
                    });*/
    const clie = new cliente(req.body);
    clie.save();
    res.json({ mensaje: "Guardar Clientes" });
};

const modificar = async function(req, res) {
    let id = req.params.id;
    //Promesa
    /*
        cliente
            .findByIdAndUpdate(id, req.body)
            .then((dato) => {
                res.json({ mensaje: "Modificado Cliente" });
            })
            .catch((error) => {
                console.log("Error", error);
            });
        //    res.json({ mensaje: "Modificar Clientes" });
        */
    //Async await
    try {
        var dato = await cliente.findByIdAndUpdate({ _id: id }, req.body);
        console.log(dato);
        res.json({ mensaje: "Modificado Cliente" });
    } catch (error) {
        res.json({ mensaje: "Error al modificar Clientes" });
    }
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