'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
    }
  }
  Animal.init({
    name: DataTypes.STRING,
    animalPaws: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};