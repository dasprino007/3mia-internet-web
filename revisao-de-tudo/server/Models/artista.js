import mongoose from "mongoose";

const artistaSchema = new mongoose.Schema({
    _id:{type: mongoose.Schema.Types.ObjectId},
    index: {Type: String},
    nome: {Type: String}
})

const artista = mongoose.model('artistas', artistaSchema)

export default artista;