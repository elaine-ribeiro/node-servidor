const express = require('express');
const app = express();
const porta = 3002;



app.listen(porta, ()=>{
    console.log('Servidor rodando no endereço: http://localhost:${porta}/');
})