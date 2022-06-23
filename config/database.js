//importar o mongoose 
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:15102005@fiaptecnico.eftcw.mongodb.net/dblr')
}

//exportar as informações para acesso externo
module.exports = conn