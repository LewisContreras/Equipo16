
const{Router} = require('express');
//**Charck es un midleware* */
const{check} = require("express-validator");
const router = Router();

const {crearUsuario,crearProducto} = require('../controllers/auth');

//**Definición de los Endpoint productos y usuarios**/
//**Router.metodo(path)**/
router.post('/insert',
[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('id','El id es obligatorio').not().isEmpty().isNumeric(),
    check('Password','El password debe ser de 8 caracteres').isLength({min: 8}),
    check('estado','El estado solo puede ser Autorizado, no autorizado, pendiente').not().isEmpty(),
    
       

] ,
crearUsuario
);


router.post('/',
[
  check('id','El id de producto es obligatorio').not().isEmpty().isNumeric(),
  check('producto','El producto debe tener una descripciòn').not().isEmpty(),
  check('precio','El valor del producto debe ser numerico').not().isEmpty().isNumeric(),

] ,
crearProducto);


/** 
router.post('/new', (req,res) => {
    res.json({
      ok:true,
      msg:'registro'    
    })  

});

**/








//**hacemos el export de los router como configuracion de ruta, almacena los identificadores de la ruta **/
module.exports = router;