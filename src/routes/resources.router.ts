import { Router, Request, Response, NextFunction } from "express"

export const router = Router()

router.get('/', (req:Request, res:Response, next:NextFunction) => {
  try{
    res.status(200).json({route: 'rootRoute'})
  }catch(error){
    next(error)
  }
})

