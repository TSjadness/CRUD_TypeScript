import express, { Express, Request, Response } from "express";
import connection from "./app/Database/sequelize";
import bodyParser from "body-parser"
import Film from "./app/Controlers/filmControlers";


const app: Express = express();
const port = 1802;

app.use(bodyParser.json());
app.use('/films', Film);

app.get('/', (req: Request, res: Response) => {
    res.send("hello word express + typescript !!! ")
});

app.listen(port, () => {
    console.log("Conectado na porta " + port);
});

connection();
