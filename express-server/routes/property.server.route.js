import express from 'express';

//import controller file
import * as propertyController from '../controllers/property.server.controller';

// get an instance of express router
const router = express.Router();

router.get('/properties', propertyController.getProperties);

export default router;
