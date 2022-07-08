import { Request, Response, Router } from "express";
import * as service from "../Services/filmService"

const router = Router();

router.get('/', async (req: Request, res: Response) => {
   res.send(await service.getAll());

   // service.getAll().then((Films) => {
   //    res.send(Films);
   // });
});

router.get('/:id', async (req: Request, res: Response) => {
   res.send(await service.getById(parseInt(req.params.id)));

   // service.getById(parseInt(req.params.id)).then((Film) => {
   //    res.send(Film);
   // });
});

router.post('/', async (req: Request, res: Response) => {
   res.status(201).send(await service.create(req.body));
   //    service.create(req.body).then((Film) => {
   //       res.status(201).send(Film);
   //    });
});

router.put('/:id', async (req: Request, res: Response) => {
   res.send(await service.updateById(parseInt(req.params.id), req.body));
   // service.updateById(parseInt(req.params.id), req.body).then((Film) => {
   //    res.status(200).send(Film);
   // });
});

router.delete('/:id', async (req: Request, res: Response) => {
   await service.deleteById(parseInt(req.params.id));
   res.status(204).send();
   // service.updateById(parseInt(req.params.id), req.body).then((Film) => {
   //    res.status(200).send(Film);
   // });
});

export default router;