import {Router} from "express";
import {getUsers, login} from "../controllers/userControllers";

export const userRoutes = Router();

userRoutes.get("/users", getUsers)

userRoutes.get("/login", login)