import express, { Request, Response } from 'express';

import { cube, square } from './calculator';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido! Esta aplicación ayuda a elevar números a sus potencias y a entender AWS. Actualmente estás en el entorno de producción');
});

router.get('/hola', (req: Request, res: Response) => {
    res.send(`Hola ${req.query.nombre ?? 'Mundo'}`);
})

router.get('/cuadrado', (req: Request, res: Response) => {
    const num = Number(req.query.numero);
    const sq = square(num);
    res.send(`El cuadrado de ${num} es ${sq}`);
})

router.get('/cubo', (req: Request, res: Response) => {
    const num = Number(req.query.numero);
    const sq = cube(num);
    res.send(`El cubo de ${num} es ${sq}`);
})