import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController"

const routes = Router();

const settingsController = new SettingsController();

/**
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 *    objeto JSON
 * }
 */

routes.post("/settings", settingsController.create);

export { routes };