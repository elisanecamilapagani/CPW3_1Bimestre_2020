import express from 'express';
 import path from 'path';
 import bodyParser from 'body-parser'; // corpo da requiscao 

 import rotasView from './routes/views';


const app = express();


/**
 * configuração dos recursos estáticos
 */

app.use(express.static(path.join(__dirname, 'public'))); //passando caminho da pasta 

/**
 * configuração do body Parser
 */
 app.use(bodyParser.urlencoded({extended: false })); // faz a interpretação do corpo da  requisição

//configuração das páginas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); //fl que esta trabalhando com pug

//rotas da view
app.use('/', rotasView);

export default app;