const mysql = require("mysql2");
type CreateUserInput = {
    username:string,
    password:string,
    first_name?:string, // can be undefined
    last_name?:string,
    email?:string,
    is_active?:boolean
}

type UpdateUserInput = {
    password?:string,
    first_name?:string,
    last_name?:string,
    email?:string,
    is_active?:boolean
}

class DB {
    private connection;

    constructor() {
        const pool = mysql.createPool({
            host:"localhost",
            user: "root",
            database: "exercise"
        })
     this.connection = pool.promise();
    }

    public async getUsers() {
        const [rows] = await this.connection.query("SELECT * FROM `users`")
        return rows;
    }

    public async createUser(config:CreateUserInput):Promise<boolean> {
        await this.connection.execute("INSERT INTO `users`(username,password,first_name,last_name,email,is_active)"+
            "VALUES(?,?,?,?,?,?)", [
                config.username,
                config.password,
                config.first_name?config.first_name:null,    // if(){}else{} equivalent
                config.last_name?config.last_name:null,
                config.email?config.email:null,
                config.is_active?config.is_active:false,
            ]);
        return true;
    }

    public async deleteUser(id:number):Promise<boolean>{
        await this.connection.execute("DELETE FROM `users` WHERE id=?", [id]);
        return true;
    }

    public async updateUser(id:number,config:UpdateUserInput):Promise<boolean>{
        let setStatement = "";
        let parameters = [];
        let parameterMap = Object.entries(config);
        for(let i = 0; i < parameterMap.length; i++){
            setStatement += `${parameterMap[i][0]} = ?`;
            setStatement += (i+1 === parameterMap.length)?" ":" ,";
            parameters.push(parameterMap[i][1]);
        }
        parameters.push(id);
        await this.connection.execute(`UPDATE users SET ${setStatement} WHERE id=?`,parameters);
        return true;
    }
}

(async () => {
    const data = await new DB().getUsers()
    console.log({data});

    // console.log(await new DB().createUser({
    //     username:"Martin",
    //     password:"neshtosi",
    //     first_name:"Martin",
    //     last_name:"Martinov",
    //     is_active:true
    // }));

    // console.log(await new DB().deleteUser(1));

    console.log(await new DB().updateUser(4,{
        last_name:"Marinov"
    }))

})();
