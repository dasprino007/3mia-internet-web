import express from 'express';
import conectarNaDB from "./db.js";
import cors from 'cors';
import artista from './Models/artista.js';
import TransformNameToIndex from './post.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()
const conexao = await conectarNaDB();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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

app.get("/get/artistas/index/:index", async (req, res) => {
    const index = req.params.index
    const listaArtistas = await artista.find({"index":index});
    res.status(200).json(listaArtistas)
})

// uri component
app.get("/get/artistas/name/:name", async (req, res) => {
    const name = decodeURIComponent(req.params.name)
    const listaArtistas = await artista.find({"nome":name});
    res.status(200).json(listaArtistas)
})

app.get("/get/artistas/id/:_id", async (req, res) => {
    const id = req.params._id
    const listaArtistas = await artista.find({_id:id});
    res.status(200).json(listaArtistas)
})

app.post("/post/artistas", async (req, res) => {
    const user = req.body
    const index = TransformNameToIndex(user?.name)

    const artist = new artista({nome:user.name, index:index})
    
    await artist.save()
    .then(() => {
        res.status(200).send("pessoa foi salva")
    })
})

app.listen(3000, () => {
    console.log("servidor conectado")
})

