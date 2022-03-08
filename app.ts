//const express = require("express")
//import express from "express"
import express = require("express")
import {Application} from "express";
import {userRoutes} from "./routes/userRoutes";

const app: Application = express();

app.use("/", userRoutes)

// CRUD OPERATIONS
// get      read
// post     create
// put      update
// delete   delete

app.listen(8080, () => {
    console.log("Connected")
})