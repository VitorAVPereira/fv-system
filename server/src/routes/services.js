import { Router } from 'express';
import serviceController from '../controllers/serviceController.js';

const router = Router();

router.route("/").get(serviceController.all)
router.route("/create").post(serviceController.create)

export default router