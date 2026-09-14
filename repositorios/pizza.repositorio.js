import { MongoClient, ObjectId } from 'mongodb';

/**
 * Cadena de conexión obtenida de Mongo Compass y configuración de base de datos.
 */
const MONGO_URI = "mongodb://root:12345678@localhost:27017/";
const DATABASE_NAME = "pizzeria";
const COLLECTION_NAME = "pizzas";

const client = new MongoClient(MONGO_URI);

/**
 * Función auxiliar para obtener la colección de pizzas desde MongoDB.
 * @returns {Promise<import('mongodb').Collection>} Colección de pizzas.
 */
async function obtenerColeccionAsync() {
  await client.connect();
  const db = client.db(DATABASE_NAME);
  return db.collection(COLLECTION_NAME);
}

/**
 * Obtiene todas las pizzas almacenadas en la base de datos.
 * @returns {Promise<Array>} Lista de todas las pizzas.
 */
export async function obtenerTodasLasPizzasAsync() {
  const coleccion = await obtenerColeccionAsync();
  const pizzas = await coleccion.find({}).toArray();
  return pizzas;
}

/**
 * Busca y retorna una pizza específica por su ID.
 * @param {string} id - Identificador único de la pizza.
 * @returns {Promise<Object|null>} Objeto de la pizza encontrada o null.
 */
export async function obtenerPizzaPorIdAsync(id) {
  const coleccion = await obtenerColeccionAsync();
  const pizza = await coleccion.findOne({ _id: new ObjectId(id) });
  return pizza;
}

/**
 * Agrega una nueva pizza a la base de datos.
 * @param {Object} pizza - Datos de la pizza a insertar.
 * @returns {Promise<string>} ID generado por MongoDB para la nueva pizza.
 */
export async function agregarPizzaAsync(pizza) {
  const coleccion = await obtenerColeccionAsync();
  const resultado = await coleccion.insertOne(pizza);
  return resultado.insertedId.toString();
}

/**
 * Actualiza los campos de una pizza existente por su ID.
 * @param {string} id - Identificador de la pizza.
 * @param {Object} pizza - Nuevos datos para actualizar.
 * @returns {Promise<Object>} Resultado de la operación de actualización.
 */
export async function actualizarPizzaAsync(id, pizza) {
  const coleccion = await obtenerColeccionAsync();
  const resultado = await coleccion.updateOne(
    { _id: new ObjectId(id) },
    { $set: { nombre: pizza.nombre, descripcion: pizza.descripcion } }
  );
  return resultado;
}

/**
 * Elimina una pizza de la base de datos por su ID.
 * @param {string} id - Identificador de la pizza a borrar.
 * @returns {Promise<Object>} Resultado de la operación de eliminación.
 */
export async function eliminarPizzaAsync(id) {
  const coleccion = await obtenerColeccionAsync();
  const resultado = await coleccion.deleteOne({ _id: new ObjectId(id) });
  return resultado;
}