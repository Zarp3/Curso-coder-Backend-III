
import { Router } from 'express';
import {
    getMockingUsers,
    getMockingPets,
    generateData,
    getUsers,
    getPets
} from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingusers', getMockingUsers);
router.get('/mockingpets', getMockingPets);
router.post('/generateData', generateData);

// endpoints de verificación
router.get('/users', getUsers);
router.get('/pets', getPets);

export default router;
