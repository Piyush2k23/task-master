import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";

const app = express();
dotenv.config();
app.use(express.json());
dbConnection();


app.get((req,res)=>{
    res.send("Hello");
})

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
})
