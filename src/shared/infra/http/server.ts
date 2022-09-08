import express, { Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import "@shared/container";
import { AppError } from "@shared/errors/AppError";
import createdConnection from "@shared/infra/typeorm";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

createdConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is Running!"));
