import { Router } from 'express'; // rotiador q vai cuida das rotas

const router = Router();


let clientes = [
    {
        nome: 'Camila Pagani',
        email: 'camila@email.com'
    },

    {
        nome: 'Maria Luisa',
        email: 'maria@email.com'
    },

    {
        nome: ' Genair Viana',
        email: 'genair@email.com'
    },
]


//let clientes=[ ];

/**
 * req tudo que vem do servidor usa esse req
 * res é a forma que é devolvida para o servidor
 * 
 *  criando a rota da página inicial
 */

router.get('/', (req, res) => res.render('index'));

router.get('/clientes', (req, res) => {

    res.render('clientes', { clientes });//chamando o vetor de clientes criado encima
});

/**
 * criando a rota para salvar um novo contato.
 */

router.post('/clientes' , (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const cliente = { nome, email};
    clientes.push(cliente);
    res.redirect('/clientes'); // rederiza novo cliente criado para a pagina de clientes

} );

export default router;