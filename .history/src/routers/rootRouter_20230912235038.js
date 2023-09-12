import express from "express";
import {  
    getJoin,
    postJoin,
    getLogin,
    postLogin,
  } from "../controllers/userController";
import { home, search } from "../controllers/videoController";


const globalRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;