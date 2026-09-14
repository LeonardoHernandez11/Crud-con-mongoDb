# Descripción CRUD con MongoDb 

## Descripción
Proyecto de una API REST hecha con Node.js y Express para administrar una pizzería. Utiliza MongoDB corriendo en un contenedor de Docker Desktop para guardar la información y Postman para hacer las pruebas de las rutas.

---

## Requisitos
- Node.js
- Docker Desktop
- MongoDB Compass
- Postman

---

## Cómo ejecutar el proyecto paso a paso

1. **Iniciar la base de datos en Docker:**
   - Abre la aplicación Docker Desktop.
   - Ve a la sección de "Containers".
   - Busca el contenedor de MongoDB y dale al botón de Play (Start) para encenderlo en el puerto 27017.

2. **Verificar en MongoDB Compass:**
   - Abre MongoDB Compass.
   - Conéctate a `mongodb://root:12345678@localhost:27017/`.
   - Revisa que aparezca la base de datos `pizzeria` con la colección `pizzas`.

3. **Iniciar el servidor:**
   - Abre la carpeta del proyecto en VS Code.
   - Abre la terminal e instala las dependencias ejecutando: `npm install`
   - Inicia el servidor con el comando: `node index.js`
   - En la terminal saldrá el mensaje confirmando que el servidor escucha en el puerto 3000.

---

## Rutas de la API (Endpoints)

- GET /api/v1/pizzas - Muestra todas las pizzas.
- GET /api/v1/pizzas/:id - Busca una pizza por su ID.
- POST /api/v1/pizzas - Agrega una nueva pizza.
- PUT /api/v1/pizzas/:id - Actualiza una pizza existente.
- DELETE /api/v1/pizzas/:id - Elimina una pizza por su ID.

---

## Pruebas en Postman

Se probaron todos los endpoints en Postman verificando que los datos se guarden correctamente en la base de datos con su ID.

![Captura de pantalla de Postman](./captura_postman.png)
