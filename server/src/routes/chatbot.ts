import { Request, Response, Router } from "express";
const router:Router = Router();

router.post('/ask',(req:Request, res:Response) => {
  console.log("Hit ask route....")
})
