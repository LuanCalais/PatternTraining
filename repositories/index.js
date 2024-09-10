// Hard import for a simple example
const animal = require("../models/animal")

class CommonRepository {
    async getAllAnimals() {
        return animal.findAll();
    }

    async createAnimal(data) {
        return animal.create(data)
    }
}

module.exports = new CommonRepository();

