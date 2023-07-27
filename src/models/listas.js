import mongoose from "mongoose";

const listaSchema = new mongoose.Schema({
    nome: {type: String, required: true },
    telefone: {type: String, required: false },
    email: {type: String, required: false },
    whatsapp: {type: Boolean, required: false },
});

const Lista = mongoose.model("Lista", listaSchema);

export default Lista;