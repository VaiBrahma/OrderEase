import express from 'express'

import cors from "cors"

import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'


configDotenv();

const app = express();

app.use(express.json());


app.use(cors());



const PORT = process.env.PORT;

console.log(PORT);
// console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(() =>{
    app.listen(PORT,() => console.log(`Server PORT: ${PORT}  `))
}).catch((err)  => console.log(`${err} Not Connected`))



 
 
