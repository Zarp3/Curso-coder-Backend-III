
class MemoryDAO {
    constructor() {
        this.data = [];
    }

    insertMany(items) {
        this.data.push(...items);
    }

    getAll() {
        return this.data;
    }
}

export const usersDAO = new MemoryDAO();
export const petsDAO = new MemoryDAO();
