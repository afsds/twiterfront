const express = require('express');
const app = express();

app.get('/api/mensagem', (req, res) => {
    res.json({ mensagem: 'Olá, esta é sua API!' });
});

app.listen(3000, () => console.log('API rodando na porta 3000'));

