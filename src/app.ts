import { country } from "./tests/_test2";

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

//app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static('public'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './src/views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/hello', (req, res) => {
  res.render('hello.pug', { country: country, }); // Se muestra la plantilla hello.pug
});

app.get('/urlparam', (req, res) => {
  res.send(req.query);
});

app.post('/urljson', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));