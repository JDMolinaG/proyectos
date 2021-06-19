const {model,Schema} = require('mongoose')
const ApartamentoModelo = require('./ApartamentoModelo')
const Reservas = Schema({
    idUsuario:{
        type:String,
        required:true,
    },
    idApartamento:{
        type:String,
        required:true,
    },
    ciudad:{
        type:String,
        required:true, 
    },
    telefono:{
        type:String,
        required:true,
    },
    correo:{
        type:String,
        required:true,
    },
    fechaInicio:{
        type:String,
        required:true,
    },
    fechaFinal:{
        type:String,
        required:true,
    },
    numeroPersonas:{
        type:String,
        required:true,
    },

})

Reservas.post('save',async function(reserva){
    let reservaApartamento = await ApartamentoModelo.findById(reserva.idApartamento)
    reservaApartamento.estado = false
    reservaApartamento.save()
    console.log(reservaApartamento.estado)
})
// Reservas.post('remove',async function(reserva){
//     let reservaApartamento = await ApartamentoModelo.findById(reserva.idApartamento)
//     reservaApartamento.estado = true
//     reservaApartamento.save()
//     console.log(reservaApartamento.estado)
// })

module.exports=model('Reservas',Reservas)