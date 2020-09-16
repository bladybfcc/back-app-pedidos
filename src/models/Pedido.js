const { mongoose, Schema } = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
    productos: [{
        producto: { type: Schema.Types.ObjectId, ref: "Producto" },
        cantidad: { type: number, min: 1, max: 100 },
    }, ],
    monto_total: { type: Schema.Types.Decimal128 },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Pedido", PedidoSchema);