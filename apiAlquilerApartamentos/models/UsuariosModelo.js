const {model,Schema} = require('mongoose')

const Usuarios = Schema({
    nombre:{
        type:String,
        required:true,
    },
    cedula:{
        type:String,
        required:true,
    },
    telefono:{
        type:Number,
        required:true,
    },
    correo:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
    },
    foto:{
        type:String,
        required:true,
    },
    
    

    
})

module.exports=model('Usuarios',Usuarios)