import initsoket from "./websocket";
import { Server } from "http"
import express, { Application, Request, Response, ErrorRequestHandler, NextFunction } from "express";
import ehbs from "express-handlebars";
import { join } from "path";
import routerMain from "./routes/router.main";
import routerUsers from "./routes/router.users";
import { urlencoded } from "body-parser";

export default class App {

    public app: Application;

    public constructor(private port?: String | Number) {
        this.app = express();
        this.settings();
        this.midlewares();
        this.routes();
    };
    private settings(): void {
        this.app.set("port", process.env.PORT || this.port || 3000);
        this.app.set("views", join(__dirname, "views"));
        this.app.set("view engine", ".hbs");
        this.app.disable("x-powered-by");
    };
    private midlewares(): void {
        this.app.use(urlencoded({ extended: true }))
        this.app.use(express.json());
        this.app.engine(".hbs", ehbs({
            layoutsDir: join(this.app.get("views"), "layouts"),
            extname: ".hbs",
            partialsDir: join(this.app.get("views"), "partials"),
            defaultLayout: "main.hbs",
        }));
    };
    private routes(): void {
        this.app.use(routerMain);
        this.app.use(routerUsers);
        this.app.use(express.static(join(__dirname, "public")));
        this.app.use((req: Request, res: Response) => {
            return res.status(404).send("this page doesn't exist");
        });
        this.app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
            console.error(err);
            res.status(500).send('Oh sh*t something broke');
        })
    };
    public listen(callback: Function = () => { console.log(`Server on port ${this.app.get("port")}`) }): Server {
        const server = this.app.listen(this.app.get("port"), callback());
        initsoket(server);
        return server;
    };
}
