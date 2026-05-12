require('dotenv').config();

const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB conectado');

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });

})
.catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
});