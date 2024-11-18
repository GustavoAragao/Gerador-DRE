const express = require('express');
const app = express();
const port = 3000;

// Configuração do middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Para processar formulários

// Rotas
app.get('/', (req, res) => {
    res.render('form'); // Página do formulário
});

app.post('/dre', (req, res) => {
    const { receitas, despesas, impostos, despesaFuncionario, despesaAluguel, despesaEnergia } = req.body;

    const receitaTotal = parseFloat(receitas) || 0;
    const despesaTotal = parseFloat(despesas) || 0;
    const impostoTotal = parseFloat(impostos) || 0;
    const despesaFuncionarioTotal = parseFloat(despesaFuncionario) || 0;
    const despesaAluguelTotal = parseFloat(despesaAluguel) || 0;
    const despesaEnergiaTotal = parseFloat(despesaEnergia) || 0;

    // Cálculos do DRE
    const receitaBruta = receitaTotal;
    const despesaBruta = despesaTotal + despesaFuncionarioTotal + despesaAluguelTotal + despesaEnergiaTotal;
    const lucroBruto = receitaBruta - despesaBruta;
    const lucroLiquido = lucroBruto - impostoTotal;

    res.render('dre', { receitaTotal, despesaTotal, impostoTotal, lucroBruto, lucroLiquido });
});


// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
