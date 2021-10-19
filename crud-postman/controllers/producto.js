const {response} = require('express');
const Producto = require('../models/Producto');
const {validationResult}=require("express-validator");

//Insertar producto
const insertarProducto = (req,resp=response) =>{
     
    const {id,producto,precio,estado} = req.body
  
    /*Guardar Producto*/  
    const product = new Producto(req.body);
    product.save();

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
        msg:'Llama metodo de insertarProducto', 
        id,
        producto,
        precio,
        estado

      })

}



//consultar producto 
const listarProducto = async (req,resp=response) =>{
    
    const productoId = req.params.id;
    const producto = await Producto.findById(productoId);
    //const productos = await Producto.find()
    //                                .populate('id');
    
    resp.status(200).json({
        ok:true,
        msg:'Llama metodo de ListarProducto', 
        //productos
        producto

      });

}



//Eliminar producto 
const eliminarProducto = async (req,resp=response) =>{
    
    const productoId = req.params.id;
    
    //new ObjectID.createFromHexString(req.params.id)
    console.log(productoId);
    console.log(productoId);

    try {
        
        const producto = await Producto.findById(productoId);
        
        console.log(producto);
        console.log(producto)

        if(!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        await Producto.findByIdAndDelete(productoId);

        resp.json({
            ok: true,
            msg: 'Producto eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar el producto',
        });
    }
}



 




module.exports= {insertarProducto,listarProducto,eliminarProducto};