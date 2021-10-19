const {response} = require('express');
const {validationResult}=require("express-validator");
const Usuario = require('../models/Usuario');
const Producto = require('../models/Producto');
const bcrypt = require('bcryptjs');



/**mongodb+srv://root:<password>@cluster0.frm8k.mongodb.net/test*clear*/
//**Definir los metodos como funciones de flecha que recibe request y response**/
//**Componente logico en un controlador, estado, get, pull, pa** */
const crearUsuario = async (req,resp=response) =>{

//    const {id} = req.body();
  /*Guardar usuario*/  
  const {name,id,Password,estado} = req.body;
  

  let usuario = await Usuario.findOne({id});
  console.log(usuario);

  //Valida si el usuario ya existe 
  if (usuario){
      return resp.status(400).json({
          ok:false,
          msg:"Usuario con el identificador enviado ya existe en la BD"
      });
  } 
 /// Valida si el usuario ya existe

  usuario = new Usuario(req.body);
  //encriptar contraseña, recibe salt con hash de encripcion, hace 10 veces el proceso
  const salt = bcrypt.genSaltSync();
  usuario.Password = bcrypt.hashSync(Password,salt);
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
        msg:'Llama metodo de crearProducto', 
        id,
        producto,
        precio,
        estado

      })

}


module.exports= {crearUsuario,crearProducto};