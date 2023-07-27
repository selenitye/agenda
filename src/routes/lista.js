import express from "express";
import ListaController from "../controllers/listaController.js";

const router = express.Router();

router
    .get("/", ListaController.getAllListas)
    .post("/", ListaController.createListas)
    .put("/:id", ListaController.updateListas)
    .get("/:id", ListaController.getByIdListas)
    .delete("/:id", ListaController.deleteListas)
    .delete("/", ListaController.deleteAllListas)

    export default router;