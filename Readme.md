# Coordinadora Proyecto

## Introducción

Este proyecto tiene como objetivo consultar la información de una guía determinada a través de una interfaz web.

## Tecnologías Utilizadas

- **Frontend:**

  - React
  - Vite

- **Backend:**
  - Node.js
  - Express
  - Sequelize
  - PostgreSQL

## Instalación

### Frontend

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/Jorgepradag/Coordinadora.git

   ```

2. Navega a la carpeta del frontend:
   cd Coordinadora/frontend

3. Instala las dependencias:
   npm install

4. Inicia la aplicación:
   npm run dev

### Backend

1. Navega a la carpeta del backend:
   cd Coordinadora/backend

2. Instala las dependencias:
   npm install express pg sequelize pg-hstore nodemon dotenv axios cors

3. Realiza la migración de la base de datos:
   npx sequelize-cli db:migrate

4. Inicia el servidor:
   npm run dev

## Consideraciones de Interés

Asegúrate de tener un gestor de bases de datos PostgreSQL instalado. Se recomienda el uso de herramientas como DBeaver para gestionar y visualizar la base de datos.

#### link video explicando el desarrollo

https://www.youtube.com/watch?v=el5mou69ooI
