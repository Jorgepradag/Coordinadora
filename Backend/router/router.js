import { Router } from 'express';
import conexion from '../config/database.js';
import modelsInit from '../models/init-models.js';

let modelos = modelsInit(conexion);
const router = Router();

router.get('/api/v1/guia/:numero_guia', async (req, res) => {
    const numero_guia = req.params.numero_guia;

    if (/^\d+$/.test(numero_guia) && numero_guia.length <= 11) {
        try {
            const resultado = await modelos.guias.findOne({
                where: {
                    numero_guia: numero_guia
                },
                include: [
                    { model: modelos.cliente },
                    { model: modelos.remitente },
                    { model: modelos.destinatario }
                ]
            });

            if (resultado) {
                // La guía fue encontrada
                const guiaEncontrada = {
                    guia_encontrada: true,
                    dato_guia: {
                        cliente: resultado.cliente,
                        remitente: resultado.remitente,
                        destinatario: resultado.destinatario
                    }
                };
                res.status(200).json(guiaEncontrada);
            } else {
                // No se encontró información asociada a la guía
                const respuesta = {
                    guia_encontrada: false,
                    mensaje: "No se encontró información asociada a la guía"
                };
                res.status(404).json(respuesta);
            }
        } catch (error) {
            console.error('Error al obtener datos:', error);
            const mensajeError = "Error: El sistema de base de datos no está disponible";
            res.status(500).json({ error: mensajeError });
        }
    } else {
        // Código de guía no válido
        const mensajeError = "Error: Código de guía no válido";
        res.status(400).json({ error: mensajeError });
    }
});

export default router;
