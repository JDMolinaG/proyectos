const {request,response} = require('express')
const UsuarioModelo = require('../models/UsuariosModelo.js')

async function buscarUsuarios(peticion=request,respuesta=response){
    let datosConstultados = await UsuarioModelo.find()
    respuesta.json({
        estado:true,
        mensaje:datosConstultados,
    })
}
async function loginUsuario(peticion=request,respuesta=response){

    let correo=peticion.params.correo
    let cedula=peticion.params.cedula
    let datosConstultados = await UsuarioModelo.find({correo:correo,cedula:cedula})
    respuesta.json({
        estado:true,
        mensaje:datosConstultados,
    })
}

async function agregarUsuarios(peticion=request,respuesta=response){
    let datosPeticion = peticion.body
    let reserva = new UsuarioModelo(datosPeticion)
    await reserva.save()
    respuesta.json({
        estado:true,
        mensaje:'Usuario agregado correctamente',
        datos:reserva
    })
}

async function editarUsuarios(peticion=request,respuesta=response){
    let id=peticion.params.id
    let datosPeticion = peticion.body
    await UsuarioModelo.findByIdAndUpdate(id,datosPeticion)
    respuesta.json({
        estado:true,
        mensaje:'Usuario actualizado correctamente',
    })
}

async function eliminarUsuarios(peticion=request,respuesta=response){
    let id=peticion.params.id
    await UsuarioModelo.findByIdAndDelete(id)
    respuesta.json({
        estado:true,
        mensaje:'Usuario eliminado correctamente',
    })
}

module.exports={
    buscarUsuarios,
    loginUsuario,
    agregarUsuarios,
    editarUsuarios,
    eliminarUsuarios
}