import {Request, Response} from "express";
import {User} from "../types/User";
import {LoginRequest} from "../types/LoginRequest";
import {UserModel} from "../models/userModel";

export const getUsers = async(req: Request, res: Response) => {
    let users: User[] = await new UserModel().getUsers()
    res.send(users)
}

export const login = (req: Request, res: Response) => {
    const loginRequest: LoginRequest = req.query;
    //console.log(loginRequest)
    if (!loginRequest.username || !loginRequest.password) {
        return res.send({
            status: 400,
            message: "Username or password has not been provided"
        })
    }

    res.send({
        status: 200,
        message: "Logged in successfully"
    })
}

