import { Request, Response, Router } from "express";

import { MyController } from "./endpoints/MyController"

function setupHttpControllerHandler(router: Router) 
{
    router.get('/', async  (req: Request, res: Response) => {
        
        var controller = new MyController(req, res);

        return controller.get();
    });

    router.get('/:id', async (req: Request, res: Response) => {

        var controller = new MyController(req, res);

        return controller.getById(req.params.id);
    });
}

export { setupHttpControllerHandler };