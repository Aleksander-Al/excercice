import { promises } from "fs";
import {User} from "../types/User";

export class UserModel {
    async getUsers(): Promise<User[]> {
        const users = await promises.readFile(__dirname + "/db.json", "utf-8")
        return JSON.parse(users);
        //console.log({formattedUsers})    // console.log as an object
    }
}

(async () => {
    await new UserModel().getUsers();
})()
