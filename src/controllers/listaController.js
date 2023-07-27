import listas from "../models/listas.js";

class ListaController {
    static getAllListas = (req, res) => {
        listas.find((err, listas) =>{
            res.status(200).json(listas);
        });
    };

    static createListas = (req, res) => {
        let lista = new listas(req.body);

        lista.save((err) => {
            if (err) {
                res
                .status(500)
                .send({ message: `${err.message} - falha ao cadastrar lista` });
            } else {
                res.status(201).send(lista.toJSON());
            }
        });
    };

    static getByIdListas = (req, res) => {
        const id = req.params.id;

        listas.findById(id, (err, listas) => {
            if (err) {
                res
                    .status(400)
                    .send({ message: `${err.message} - Id da lista não localizado`});
            } else {
                res.status(200).send(listas);
            }
        });
    };

 static updateListas = (req, res) => {
    const id = req.params.id;

    listas.findByIdAndUpdate(id, { $set : req.body }, (err) =>{
        if (!err) {
            res.status(200).send({ message: "lista atualizada com sucesso"});
        } else {
            res.status(500).send({ message: err.message });
        }
    });
 };

 static deleteListas = (req, res) => {
    const id = req.params.id;

    listas.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: "lista removida com sucesso"});
        } else {
            res.status(500).send({ message: err.message });
        }
    });
 };

static deleteAllListas = async (req, res) => {
    try {
        await listas.deleteMany({});
        res
         .status(200)
         .send({ message: "Todas as listas foram removidas com sucesso"});
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

}

export default ListaController;