import mongoose from "mongoose";

export default async function conectarNaDB(){
    mongoose.connect("mongodb+srv://adm:adm@spotifyserver.znkjf.mongodb.net/spotify?retryWrites=true&w=majority&appName=SpotifyServer")
    return mongoose.connection;
}