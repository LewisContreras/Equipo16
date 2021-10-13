const {Schema,model}  = require("mongoose");

const productoS = Schema({
    
    id: {
        type:Number,
        require:true,
        unique:true

    },

    producto: {
        type:String,
        require:true
    },

    precio: {
        type:Number,
        require:true
    }
});

module.exports=model('Producto', productoS);
//var schema = new schema ({nombre:String},{collection:'usuarios'});  autorizado, no, pendiente--- 