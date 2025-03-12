const express = require('express');
const router = express.Router();
const { Job, JobDetails } = require('../models');

// Criar operação com detalhes
router.post('/', async (req, res) => {
  try {
    const { detalhes, ...operacaoData } = req.body;
    
    const operacao = await Operacao.create(operacaoData);
    
    if(detalhes && detalhes.length > 0) {
      const detalhesParaCriar = detalhes.map(d => ({
        ...d,
        operacaoId: operacao.id
      }));
      await OperacaoDetalhe.bulkCreate(detalhesParaCriar);
    }

    const resultado = await Operacao.findByPk(operacao.id, {
      include: 'detalhes'
    });

    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Buscar operação com detalhes
router.get('/:id', async (req, res) => {
  try {
    const operacao = await Operacao.findByPk(req.params.id, {
      include: 'detalhes'
    });

    if(!operacao) {
      return res.status(404).json({ error: 'Operação não encontrada' });
    }

    res.json(operacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar operação e detalhes
router.put('/:id', async (req, res) => {
  try {
    const operacao = await Operacao.findByPk(req.params.id);
    if(!operacao) {
      return res.status(404).json({ error: 'Operação não encontrada' });
    }

    await operacao.update(req.body);

    if(req.body.detalhes) {
      await OperacaoDetalhe.destroy({ where: { operacaoId: operacao.id } });
      const detalhesParaCriar = req.body.detalhes.map(d => ({
        ...d,
        operacaoId: operacao.id
      }));
      await OperacaoDetalhe.bulkCreate(detalhesParaCriar);
    }

    const resultado = await Operacao.findByPk(operacao.id, {
      include: 'detalhes'
    });

    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Adicione outras rotas conforme necessário