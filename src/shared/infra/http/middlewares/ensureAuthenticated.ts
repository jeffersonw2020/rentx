import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "5129c11b7c97f7f1091f27ecc20d69ec"
    ) as IPayload;
    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    request.user = {
      id: user_id,
    };
    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
