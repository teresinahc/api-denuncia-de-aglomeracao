import express from 'express';
import ComplaintController from './app/controllers/ComplaintController';

const routes = express.Router();

routes.get('/users', ComplaintController.index);

export default routes;
