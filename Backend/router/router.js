import { Router } from 'express';
import conexion from '../config/database.js';
import modelsInit from '../models/init-models.js';
import axios from 'axios';

let modelos = modelsInit(conexion);
const router = Router();



router.get('/api', async (req, res) => {
    const resultado = await modelos.unidad.findAll();
    res.status(200).json(resultado);
 })


/**
 * @swagger
 * /api/v1/guia/{numero_guia}:
 *   get:
 *     summary: Obtiene información de una guía por su número.
 *     parameters:
 *       - in: path
 *         name: numero_guia
 *         required: true
 *         description: Número de la guía.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información de la guía.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Guia'
 *       400:
 *         description: Error de tipo de dato ingresado.
 *       404:
 *         description: No se encontró información asociada a la guía.
 *       500:
 *         description: La guía no se encuentra en nuestro repositorio de datos y la API externa no está disponible.
 */


 router.get('/api/v1/guia/:numero_guia', async (req, res) => {
   const numero_guia = req.params.numero_guia;
 
   if (!/^\d+$/.test(numero_guia)) {
    
     const mensajeError = "Error: El tipo de dato ingresado no es válido";
     return res.status(400).json({ error: mensajeError });
   }
 
   if (numero_guia.length > 11) {
    
     const mensajeError = "Error: La longitud ingresada no corresponde al máximo permitido";
     return res.status(400).json({ error: mensajeError });
   }
 
   try {
     
     const resultado = await modelos.guias.findOne({
       where: {
         numero_guia: numero_guia
       },
       include: [
         { model: modelos.cliente, as: 'cliente' },
         { model: modelos.remitente, as: 'remitente' },
         { model: modelos.destinatario, as: 'destinatario' },
         { model: modelos.unidad, as: 'unidad' },
         { model: modelos.ultimo_estado_tracking, as: 'ultimo_estado_tracking' },
       ]
     });
 
     if (resultado) {
       const guiaEncontrada = {
         guia_encontrada: true,
         dato_guia: {
           cliente: resultado.cliente,
           remitente: resultado.remitente,
           destinatario: resultado.destinatario,
           "tipo_poblacion_destino": "D",
           unidad: resultado.unidad,
           ultimo_estado_tracking: resultado.ultimo_estado_tracking
         }
       };
       return res.status(200).json(guiaEncontrada);
     } else {
       
       const apiURL = `https://apiv2-test.coordinadora.com/cm-consultar-guia-ms/guia/${numero_guia}`;
       const respuestaAPI = await axios.get(apiURL);
 
       if (respuestaAPI.data.isError) {
         
         const mensajeError = "Error: La guía no se encuentra en nuestro repositorio de datos y la API externa no está disponible";
         return res.status(500).json({ error: mensajeError });
       }
 
     
       const respuesta = {
         guia_encontrada: false,
         mensaje: "No se encontró información asociada a la guía"
       };
       return res.status(404).json(respuesta);
     }
   } catch (error) {
     console.error('Error al obtener datos:', error);
     const mensajeError = "Error: El sistema de base de datos no está disponible";
     return res.status(500).json({ error: mensajeError });
   }
 });
 





export default router;
