const express = require('express');
var cors = require('cors')

const app = express();
const newsRepository = require('./repositories/newsRepository');
app.use(cors())

app.get('/news', (req, res) => {
  newsRepository.getAll()
    .then((news) => {    
        console.log(news)    
        res.status(200).send(news);
    }).catch(err => res.status(500).send(err))    
});


app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000');
});