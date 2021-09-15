import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import { createConnection } from "typeorm";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import Router from "./routes";
import dbConfig from "./config/database";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);
app.use(Router);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on", PORT);
    });
  })
  .catch((err) => {
    console.log("Error", err);
    process.exit(1);
  });
