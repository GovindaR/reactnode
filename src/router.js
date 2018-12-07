// es6
import express from "express";
import userController from "./controller/userController";

const app = express();

app.get("/", (req, res) => res.send(200, "Api is running"));

app.use("/user", userController);
// app.get('/', (req, res) => res.send(
//     {
//     users:{
//         firstname:'ram',
//         lastname:'stk'
//     }
// }
// ));

module.exports = app;
