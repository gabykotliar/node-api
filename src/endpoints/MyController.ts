import { Response, Request } from "express";

import { ControllerBase } from "../tbx/services/ControllerBase"

class MyController extends ControllerBase {

    constructor(req: Request, res: Response) {
        super(req, res);
    }

    get() : Response {
        return this.json([1, 2, 3, 4]);
    }

    getById(id: any) {
        this.json({ id: id });
    }
}

export { MyController };