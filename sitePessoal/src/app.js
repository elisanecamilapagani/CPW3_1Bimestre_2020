import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import  rotasView from './routes/views';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//rotas view
app.use('/', rotasView);

export default app;