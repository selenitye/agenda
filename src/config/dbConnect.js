import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://admin:luana123@cluster0.jkke61o.mongodb.net/Agenda"
);

let db = mongoose.connection;

export default db;