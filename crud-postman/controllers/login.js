const {response} = require('express');
const Login = require('../models/Login');

const {validationResult}=require("express-validator");
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const loginUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        /**Confirmar email */
        let usuario = await Usuario.findOne({ email }); 
        
        if(!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario y/o contraseña incorrecta'
            });
        }

        /**Confirmar email */

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario y/o contraseña incorrecta'
            });
        }

        /**Generar Token */
        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });
        
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }    
}

const revalidarToken = async (req, resp = response) => {


    const { uid, name } = req;

    /**Generar Nuevo Token */
    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token: token
    });
}



module.exports= {loginUsuario,revalidarToken};