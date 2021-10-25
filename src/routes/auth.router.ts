import { Router, Request, Response, NextFunction } from "express"

export const router = Router()

router.get('/login', (req:Request, res:Response, next:NextFunction) => {
  try{
    res.status(200).json({route: "loginRoute"})
  }catch(error){
    next(error)
  }
})