import {Router} from "express";
import {createUser, getUsers, login} from "../controllers/userControllers";

export const userRoutes = Router();
userRoutes.get("/users", getUsers);
userRoutes.get("/login", login);
userRoutes.post("/user", createUser);   // Alt + Enter for import

