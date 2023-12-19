import { Router } from 'express';
import conexion from '../config/database.js';
import modelsInit from '../models/init-models.js';

let modelos = modelsInit(conexion);
const router = Router();


router.get('/api', async (req, res) => {
    const resultado = await modelos.unidad.findAll();
    res.status(200).json(resultado);
 })

 router.get('/api/v1/guia/:numero_guia', async (req, res) => {
        const numero_guia = req.params.numero_guia;

        if (/^\d+$/.test(numero_guia) && numero_guia.length <= 11) {
            try {
                const resultado = await modelos.guias.findOne({
                    where: {
                        numero_guia: numero_guia
                    },
                    include:[
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
                        dato_guias: {
                            cliente: resultado.cliente,
                            remitente: resultado.remitente,
                            destinatario: resultado.destinatario,
                            unidad: resultado.unidad,
                            ultimo_estado_tracking: resultado.ultimo_estado_tracking
                        }
                    };
                    res.status(200).json(guiaEncontrada);
                } else {
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
            const mensajeError = "Error: Código de guía no válido";
            res.status(400).json({ error: mensajeError });
        }
    });




export default router;
