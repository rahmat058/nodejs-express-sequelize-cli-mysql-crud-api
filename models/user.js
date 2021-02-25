"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: DataTypes.STRING,
      firstName: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, 10],
            msg: "First Name length will be 5 to 10"
          }
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, 10],
            msg: "Last Name length will be 5 to 10"
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
