process.on("unhandledRejection", (reason) => {
    console.log("Exepcion inesperada, razon: ", reason);
});

import App from "./app";

const newApp = new App();

newApp.listen();
