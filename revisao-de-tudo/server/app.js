import express from 'express';
import conectarNaDB from "./db.js";
import cors from 'cors';
import artista from './Models/artista.js';

const app = express()
const conexao = await conectarNaDB();
app.use(cors());

conexao.on('error', (err) => {
    console.error("Erro ao se conectar ao mongodb: ", err)
})

conexao.once('open', () => {
    console.log('conectado ao MongoDB')
})
app.get("/", async (req, res) => {
    res.json({"Bem vindo":"hello world"})
})

app.get("/get/artistas", async (req, res) => {
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas)
})

app.get("/get/artistas/:index", async (req, res) => {
    const index = req.params.index
    const listaArtistas = await artista.find({"index":index});
    res.status(200).json(listaArtistas)
})

app.post("/post/artistas/:name", async (req, res) => {
    
})

app.listen(3000, () => {
    console.log("servidor conectado")
})

