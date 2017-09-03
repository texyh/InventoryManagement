const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'id should not be empty' },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'User must have a first name.' },
      },
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'User must have a last name.' },
      },
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'Provide a valid email.' },
      },
      field: 'email',
    },
    avatarUrl: {
      type: DataTypes.STRING,
      field: 'avatar_url',
    },
    position: {
      type: DataTypes.ENUM,
      values: ['admin', 'manager', 'employee'],
      field: 'position',
      defaultValue: 'employee'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'User must provide a password' },
        len: {
          args: 8,
          msg: "Password must be atleast 8 characters in length"
        },
      },
      field: 'password',
    },
    accountStatus: {
      type: DataTypes.ENUM,
      values: ['active', 'suspended'],
      field: 'account_status',
      defaultValue: 'active'
    },
  },
    {
      timestamps: false,
      tableName: 'users',
    });

  User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
  });
  return User;
};