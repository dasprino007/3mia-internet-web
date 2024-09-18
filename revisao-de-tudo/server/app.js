import express from 'express';
import conectarNaDB from "./db.js";
import cors from 'cors';

const app = express()
const conexao = await conectarNaDB();

conexao.on('error', (err) => {
    console.error("Erro ao se conectar ao mongodb: ", err)
})

conexao.once('open', () => {
    console.log('conectado ao MongoDB')
})

app.use(cors());
app.listen(3000, () => {
    console.log("servidor conectado")
})

