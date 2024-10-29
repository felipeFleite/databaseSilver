const express = require('express');
const { Client } = require('pg');

const port = 5000; 

const cors = require('cors');

const app = express();
app.use(cors());

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "30leite30",
    database: "pessoas"
});

client.connect()


app.get('/alunos', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM public.alunos');
        res.json(result.rows);
    } catch (error) {
        console.error("Error details:", error);
        res.status(500).json({ error: 'Database query error' });
    }
});

app.get('/', async (req, res) => {
    res.send('Servidor Funcionando!');
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});