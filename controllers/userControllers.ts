import {Request, Response} from "express";
import {User} from "../types/User";
import {LoginRequest} from "../types/LoginRequest";
import {UserModel} from "../models/userModel";

export const getUsers = async(req: Request, res: Response) => {
    let users: User[] = await new UserModel().getUsers()
    res.send(users)
}

type UserDataInput = {
    username: string,
    password: string
}

export const createUser = async(req: Request, res: Response) => {
    const userData = req.body;
    const userModel = new UserModel();
    const id = await userModel.getNewId();
    if(!userData.username){
        return res.send({
            status:400,
            message:"Username not provided"
        })
    }
    if(!userData.password){
        return res.send({
            status:400,
            message:"Password not provided"
        })
    }
    const user:User = {
        id:id,
        username:userData.username,
        password:userData.password
    }
    await userModel.updateUserList(user);
    console.log({id});
    console.log(userData)
    res.send(user)
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

