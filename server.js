const express = require('express');
const app = express();
const port = 3000;

// Configuração do EJS como template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Configuração de arquivos estáticos
app.use(express.static('public'));

// Rotas básicas
app.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});