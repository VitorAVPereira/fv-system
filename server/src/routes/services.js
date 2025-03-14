import serviceController from '../controllers/serviceController.js';
import { Router } from 'express';

const router = Router();

router.route("/").get(serviceController.all)

export default router