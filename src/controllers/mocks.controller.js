
import {
    createMockUsers,
    createMockPets,
    insertData,
    getAllUsers,
    getAllPets
} from '../services/mocks.service.js';

export const getMockingUsers = (req, res) => {
    const users = createMockUsers(50);
    res.json(users);
};

export const getMockingPets = (req, res) => {
    const pets = createMockPets(10);
    res.json(pets);
};

export const generateData = (req, res) => {
    const { users, pets } = req.body;

    const result = insertData(users, pets);

    res.json({
        message: 'Data generated and inserted',
        ...result
    });
};

export const getUsers = (req, res) => {
    res.json(getAllUsers());
};

export const getPets = (req, res) => {
    res.json(getAllPets());
};
