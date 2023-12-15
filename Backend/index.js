import dotenv from 'dotenv'
import express from 'express';
import conexion from './config/database.js'
const app = express()
import router from './router/router.js';
import cors from 'cors';
dotenv.config();



async function iniciarServidor(){
    try {
        await conexion.sync({force:false}) 
    } catch (error) {
        console.error("Error al sincronizar: "+ error)
        return;
    }


app.use(cors());
app.use(router)
app.use(express.urlencoded({extended:false}))
app.listen(process.env.APP_PORT)
console.log(`Corriendo http://localhost:${process.env.APP_PORT}`)




}


iniciarServidor()
