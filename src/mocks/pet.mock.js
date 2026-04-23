
export const generatePets = (num) => {
    const pets = [];

    for (let i = 0; i < num; i++) {
        pets.push({
            _id: i,
            name: `Pet${i}`,
            type: Math.random() > 0.5 ? 'dog' : 'cat'
        });
    }

    return pets;
};
