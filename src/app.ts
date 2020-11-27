import express, {
    NextFunction,
    RequestHandler,
    Request,
    Response,
    Router,
    json,
    response,
  } from "express";

import { setupHttpControllerHandler } from "./bootsraping"

const app = express();
const port = 3000;

const mainRouter = Router()

const basePath = '/' 

setupHttpControllerHandler(mainRouter);

app.use(basePath, mainRouter);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

