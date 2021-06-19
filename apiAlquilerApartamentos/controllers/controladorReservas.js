const { request, response } = require('express')
const ReservacionModelo = require('../models/ReservaModelo.js')
const ApartamentoModelo = require('../models/ApartamentoModelo')
const { route } = require('../routes/rutasHoteles.js')

async function buscarReservaciones(peticion = request, respuesta = response) {
    let datosConstultados = await ReservacionModelo.find()
    respuesta.json({
        estado: true,
        mensaje: datosConstultados,
    })
}

async function buscarReservacionId(peticion = request, respuesta = response) {
    let idUsu = peticion.params.idUsu
    let datosConstultados = await ReservacionModelo.find({ idUsuario: idUsu })
    respuesta.json({
        estado: true,
        mensaje: datosConstultados,
    })
}

async function agregarReservacion(peticion = request, respuesta = response) {
    let datosPeticion = peticion.body
    let reserva = new ReservacionModelo(datosPeticion)
    await reserva.save()
    respuesta.json({
        estado: true,
        mensaje: 'Reserva agregada con exito',
        datos: reserva
    })
}

async function editarReservacion(peticion = request, respuesta = response) {
    let id = peticion.params.id
    let datosPeticion = peticion.body
    await ReservacionModelo.findByIdAndUpdate(id, datosPeticion)
    respuesta.json({
        estado: true,
        mensaje: 'Reservacion Actualizado con exito',
    })
}

async function eliminarReservacion(peticion = request, respuesta = response) {
    let id = peticion.params.id
    let idReservacion = await ReservacionModelo.findById(id)
    if(idReservacion){
        let idApartamento = await ApartamentoModelo.findById(idReservacion.idApartamento)
        idApartamento.estado = true
        idApartamento.save()
        console.log('por aqui pase hola')
        await ReservacionModelo.findByIdAndDelete(id)
    }
    respuesta.json({
        estado: true,
        mensaje: 'Reservacion Eliminada',
    })
}

module.exports = {
    buscarReservaciones,
    buscarReservacionId,
    agregarReservacion,
    editarReservacion,
    eliminarReservacion
}