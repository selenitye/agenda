import app from "./src/app.js";
import chalk from "chalk";

const port = 2727;

app.listen(port, () => {
    console.log(
        chalk.blue.bgGreen.bold(`Servidor está rodando na porta, ${port}`)
    );
});