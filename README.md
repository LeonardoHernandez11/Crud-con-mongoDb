# Crud con mongoDb

## Descripción del Proyecto
Este proyecto es una API REST desarrollada en **Node.js** y **Express** para la gestión de productos de una pizzería (operaciones CRUD). Utiliza **MongoDB** alojado en un contenedor de **Docker Desktop** para la persistencia de los datos, **MongoDB Compass** para la administración gráfica de la base de datos y **Postman** para la ejecución del testing.

---

## Requisitos Previos (Interfaces Gráficas y Entorno)
- [Node.js](https://nodejs.org/) (v16 o superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Aplicación gráfica)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass) (Cliente gráfico para MongoDB)
- [Postman](https://www.postman.com/) (Aplicación gráfica para pruebas de API)

---

## Instrucciones de Ejecución (Paso a Paso con Aplicaciones Gráficas)

### 1. Iniciar la Base de Datos en Docker Desktop
1. Abre la aplicación **Docker Desktop** en tu equipo.
2. En el panel lateral izquierdo, selecciona la sección **Containers**.
3. Localiza el contenedor de MongoDB (por ejemplo, `mongo` o el nombre asignado en clase).
4. Haz clic en el botón de reproducción **▶️ (Start)** ubicado en la columna de acciones del contenedor.
5. Verifica que el estado cambie a **Running** (color verde) y que el puerto asignado sea `27017:27017`.

---

### 2. Verificar la Conexión en MongoDB Compass
1. Abre **MongoDB Compass**.
2. En la pantalla inicial (*New Connection*), selecciona tu conexión guardada o ingresa la URI de conexión:
   ```text
   mongodb://localhost:27017
