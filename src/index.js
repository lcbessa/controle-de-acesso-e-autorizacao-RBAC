import express, { Router } from "express";
import bodyParser from "body-parser";
import { Auth } from "@/app/controllers";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = new Router();

router.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World!" });
});

app.use("/auth", Auth);

console.log(`Servidor rodando no link http://localhost:${port}`);

app.listen(port);
