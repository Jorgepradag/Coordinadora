import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Coordinadora',
      version: '1.0.0',
      description: 'Documentación de la API de Coordinadora',
    },
  },
  apis: ['./router/router.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
