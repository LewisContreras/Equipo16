// Funciones CRUD ventas

const { validationResult } = require('express-validator');
const { response } = require('express');

const Venta = require('../models/Venta');

// Insertar venta
const insertarVenta = (req, resp = response) => {
    const {
        cantidad, estado, id, idCliente, nombreCliente, producto, total,
        valorUnitario, vendedor,
    } = req.body
  
    /*Guardar Venta*/  
    const venta = new Venta(req.body);
    venta.save();

    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return resp.status(400).json({
            ok:false,
            errors:errors.mapped()
        });
  
    }
  
    console.log(req.body);

    resp.json({
        ok:true,
        msg:'Llama metodo de insertarVenta', 
        cantidad, estado, id, idCliente, nombreCliente, producto, total,
        valorUnitario, vendedor,
    })
}

// Consultar venta por ID
const listarVenta = async (req, resp = response) =>{
    const {
        params: {
            id: ventaId,
        },
    } = req;
    const venta = await Venta.findById(ventaId);
    
    resp.status(200).json({
        ok:true,
        msg:'Llama metodo de ListarVenta',
        venta,
    });
}

// Eliminar Venta por ID
const eliminarVenta = async (req, resp = response) =>{
    const {
        params: {
            id: ventaId,
        },
    } = req;

    try {
        const venta = await Venta.findById(ventaId);

        if (!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'No se encuentran resultados para la venta consultada',
            });
        }

        await Venta.findByIdAndDelete(ventaId);

        resp.json({
            ok: true,
            msg: 'Venta eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar la venta',
        });
    }
}

// Actualizar Venta
const actualizarVenta = async (req, resp = response) => {
    const {
        params: {
            id: ventaId,
        },
    } = req;

    try {
        
        const venta = await Venta.findById(ventaId);

        if (!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'No se encuentran resultados para la venta consultada',
            });
        }

        const ventaActualizada = await Venta.findByIdAndUpdate(ventaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Venta actualizada de manera exitosa',
            venta: ventaActualizada
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al acvtualizar la venta',
        });
    }
}

module.exports = {
    insertarVenta, listarVenta, eliminarVenta, actualizarVenta,
};
