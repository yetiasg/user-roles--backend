import { Request, Response } from "express";
import { HttpException } from "../exceptions/HttpException.exceptions";

export const errorHandler = (error: HttpException, req: Request, res: Response) => {
  const status = error.status || 500
  const message = error.message || 'Something went wrong'
  res.status(status).json({
    error:{
      status,
      message
    }
  })
}