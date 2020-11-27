import { 
    Request, 
    Response 
} from "express";

class ControllerBase {

    private req: Request;
    private res: Response

    constructor(request: Request, response: Response)
    {
        this.req = request;
        this.res = response;
    }

    json(model: any) : Response {

        this.res.status(200).json(model);

        return this.res;
    }
}

export { ControllerBase };