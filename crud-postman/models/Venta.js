// Schema de Venta

const { Schema, model }  = require('mongoose');

const ventas = Schema({

    id: {
        type: Number,
        require: true,
        unique: true,
    },

    idCliente: {
        type: Number,
        require: true,
    },

    nombreCliente: {
        type: String,
        require: true,
    },

    producto: {
        type: String,
        require: true,
    },

    valorUnitario: {
        type: Number,
        require: true,
    },

    cantidad: {
        type: Number,
        require: true,
    },

    total: {
        type: Number,
        require: true,
    },

    vendedor: {
        type: String,
        require: true,
    },

    estado: {
        type: String,
        require: true,
    },
});

module.exports = model('Ventas', ventas);
