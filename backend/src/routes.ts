import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import PointController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const uploads = multer(multerConfig);

const pointsController = new PointController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

routes.post('/points', uploads.single('image'), pointsController.create);

export default routes;
