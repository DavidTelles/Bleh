const express = require('express');
const router = express.Router();

const Usuario = require('../models/Usuario');

router.post('/create', async (req, res) => {
    try {

        const { nome, email, idade } = req.body || {};

        const usuario = await Usuario.create({
            nome,
            email,
            idade
        });

        res.status(201).json(usuario);

    } catch (err) {

        res.status(500).json({
            erro: err.message
        });

    }
});

router.get('/', async (req, res) => {
    try {

        const usuarios = await Usuario.find();

        res.json(usuarios);

    } catch (err) {

        res.status(500).json({
            erro: err.message
        });

    }
});

router.put('/:id', async (req, res) => {
    try {

        const { nome, email, idade } = req.body;

        const usuarioAtualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            {
                nome,
                email,
                idade
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!usuarioAtualizado) {
            return res.status(404).json({
                erro: 'Usuário não encontrado'
            });
        }

        res.json(usuarioAtualizado);

    } catch (err) {

        res.status(500).json({
            erro: err.message
        });

    }
});

router.delete('/:id', async (req, res) => {
    try {

        const usuarioDeletado = await Usuario.findByIdAndDelete(
            req.params.id
        );

        if (!usuarioDeletado) {
            return res.status(404).json({
                erro: 'Usuário não encontrado'
            });
        }

        res.json({
            mensagem: 'Usuário deletado com sucesso'
        });

    } catch (err) {

        res.status(500).json({
            erro: err.message
        });

    }
});

module.exports = router;