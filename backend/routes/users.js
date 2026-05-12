const express = require('express');
const router = express.Router();

const Usuario = require('../models/Usuario');

router.post('/create', async (req, res) => {
    try {

        const { nome, email, idade } = req.body || {};

        if (!nome || !email) {
            return res.status(400).json({
                erro: 'Nome e email são obrigatórios'
            });
        }

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

module.exports = router;