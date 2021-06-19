const { model, Schema } = require('mongoose')


const Apartamentos = Schema({
    direccion: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    numeroCamas: {
        type: String,
        required: true,
    },
    numeroBaños: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
        default:true
    },
    foto: {
        type: String,
        required: true,
    },

})


module.exports = model('Apartamentos', Apartamentos)