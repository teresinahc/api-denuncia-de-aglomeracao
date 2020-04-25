import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ComplaintController from './app/controllers/ComplaintController';
import FileController from './app/controllers/FileController';

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/complaints', ComplaintController.index);
routes.post('/complaints', ComplaintController.create);
routes.delete('/complaints/:id', ComplaintController.delete);

// TODO: route to list completed complaints
// TODO: delete complaint route

routes.post('/file', upload.single('file'), FileController.store);

export default routes;
