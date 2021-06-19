const {request,response} = require('express')
const ApartamentoModelo = require('../models/ApartamentoModelo')

async function buscarApartamento(peticion=request,respuesta=response){
    let datosConstultados = await ApartamentoModelo.find()
    respuesta.json({
        estado:true,
        mensaje:datosConstultados,
    })
}

async function buscarApartamentoId(peticion=request,respuesta=response){
    let id=peticion.params.id
    let datosConstultados = await ApartamentoModelo.findById(id)
    respuesta.json({
        estado:true,
        mensaje:datosConstultados,
    })
}

async function agregarApartamento(peticion=request,respuesta=response){
    let datosPeticion = peticion.body
    let reserva = new ApartamentoModelo(datosPeticion)
    await reserva.save()
    respuesta.json({
        estado:true,
        mensaje:'Apartamento agregado con exito',
        datos:reserva
    })
}

async function editarApartamento(peticion=request,respuesta=response){
    let id=peticion.params.id
    let datosPeticion = peticion.body
    await ApartamentoModelo.findByIdAndUpdate(id,datosPeticion)
    respuesta.json({
        estado:true,
        mensaje:'Apartamento Actualizado con exito',
    })
}

async function eliminarApartamento(peticion=request,respuesta=response){
    let id=peticion.params.id
    await ApartamentoModelo.findByIdAndDelete(id)
    respuesta.json({
        estado:true,
        mensaje:'Apartamento Eliminado',
    })
}

module.exports={
    buscarApartamento,
    buscarApartamentoId,
    agregarApartamento,
    editarApartamento,
    eliminarApartamento
}