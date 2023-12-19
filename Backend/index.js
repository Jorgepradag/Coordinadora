import dotenv from 'dotenv'
import express from 'express';
import conexion from './config/database.js'
const app = express()
import router from './router/router.js';
import cors from 'cors';
dotenv.config();



async function iniciarServidor() {
    try {
      await conexion.sync({ force: false });
      console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
      console.error('Error al sincronizar:', error);
      return;
    }
 
    const PORT = process.env.APP_PORT || 3000;
    
    app.use(cors());
    app.use(router);
    app.use(express.urlencoded({ extended: false }));

    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
}


iniciarServidor()
