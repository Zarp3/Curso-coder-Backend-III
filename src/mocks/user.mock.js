
import bcrypt from 'bcrypt';

export const generateUsers = (num) => {
    const users = [];

    for (let i = 0; i < num; i++) {
        users.push({
            _id: i,
            first_name: `User${i}`,
            last_name: `Test${i}`,
            email: `user${i}@test.com`,
            password: bcrypt.hashSync('coder123', 10),
            role: Math.random() > 0.5 ? 'admin' : 'user',
            pets: []
        });
    }

    return users;
};
