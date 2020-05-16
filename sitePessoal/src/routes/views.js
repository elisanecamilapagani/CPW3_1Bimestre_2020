import { Router} from 'express';

const router = Router( );

router.get ('/', ( req, res) =>res.render('index'));
router.get ('/biografia', (req,res) => res.render('biografia'));
router.get('/portfolio', (req , res) => res.render('portfolio'));
router.get ('/contato', ( req, res) => res.render('contato'));

export default router;