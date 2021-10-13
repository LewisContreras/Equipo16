const {response} = require('express');
const {validationResult}=require("express-validator");
const Usuario = require('../models/Usuario');
const Producto = require('../models/Producto');




/**mongodb+srv://root:<password>@cluster0.frm8k.mongodb.net/test*clear*/
//**Definir los metodos como funciones de flecha que recibe request y response**/
//**Componente logico en un controlador** */
const crearUsuario = (req,resp=response) =>{

    
  /*Guardar usuario*/  
  const {name,id,Password,estado} = req.body;
  
  const usuario = new Usuario(req.body);
  usuario.save();

  /**Objeto errors**/
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
        msg:'Llama metodo de crearUsuario',    
        name,
        id,
        Password,
        estado
      })

}


const crearProducto = (req,resp=response) =>{
    
 
    const {id,producto,precio} = req.body
  
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
        msg:'Llama metodo de crearProducto', 
        id,
        producto,
        precio

      })

}


module.exports= {crearUsuario,crearProducto};