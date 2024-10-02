import express from 'express';
import conectarNaDB from "./db.js";
import cors from 'cors';
import artista from './Models/artista.js';
import TransformNameToIndex from './post.js';

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
    const name = decodeURIComponent(req.params.name)
    const index = TransformNameToIndex(name)
    const artist = new artista({"nome":name, "index":index})

    await artist.save()
    .then(() => {
        res.status(200).send("pessoa foi salva")
    })
})

app.listen(3000, () => {
    console.log("servidor conectado")
})

