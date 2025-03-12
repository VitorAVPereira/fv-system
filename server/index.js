const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

// Configurações
app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/operacoes', require('./routes/operacoes'));

// Sincronizar banco de dados
sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});