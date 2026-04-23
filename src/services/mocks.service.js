
import { generateUsers } from '../mocks/user.mock.js';
import { generatePets } from '../mocks/pet.mock.js';
import { usersDAO, petsDAO } from '../dao/memory.dao.js';

export const createMockUsers = (num) => generateUsers(num);
export const createMockPets = (num) => generatePets(num);

export const insertData = (usersQty, petsQty) => {
    const users = generateUsers(usersQty);
    const pets = generatePets(petsQty);

    usersDAO.insertMany(users);
    petsDAO.insertMany(pets);

    return {
        usersInserted: users.length,
        petsInserted: pets.length
    };
};

export const getAllUsers = () => usersDAO.getAll();
export const getAllPets = () => petsDAO.getAll();
