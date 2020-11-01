import initsoket from "./websocket";
import express, { Application } from "express";
import ehbs from "express-handlebars";
import { join } from "path";
import routerMain from "./routes/router.main";

export default class App {

    public app: Application;

    public constructor(private port?: String | Number) {
        this.app = express();
        this.settings();
        this.midlewares();
        this.routes();
    }
    private settings(): void {
        this.app.set("port", process.env.PORT || this.port || 3000);
        this.app.set("views", join(__dirname, "views"));
        this.app.set("view engine", ".hbs")
    }
    private midlewares(): void {
        this.app.use(express.json())
        this.app.engine(".hbs", ehbs({
            layoutsDir: join(this.app.get("views"), "layouts"),
            extname: ".hbs",
            partialsDir: join(this.app.get("views"), "partials"),
            defaultLayout: "main.hbs",
        }));
    }
    private routes(): void {
        this.app.use(routerMain);
    }
    public listen(): void {
        const server = this.app.listen(this.app.get("port"), () => {
            console.log(`Servidor en el puerto ${this.app.get("port")}`)
        });
        initsoket(server);
    }
}
