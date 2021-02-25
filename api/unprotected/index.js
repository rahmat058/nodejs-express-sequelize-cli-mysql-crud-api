const findAllUsers = require('./user/findAllUsers')
const createUser = require('./user/createUser')
const findByUserId = require('./user/findByUserId')
const updateByUserId = require('./user/updateByUserId')
const deleteUserByUserId = require('./user/deleteUserByUserId')
const deleteAllUsers = require('./user/deleteAllUsers')

module.exports = {
  create: (app) => {
    // Create the routes

    // find all users
    app.use('/users', findAllUsers)

    // create new user
    app.use('/users', createUser)

    // find the user by userId
    app.use('/users', findByUserId)

    // update user by userId
    app.use('/users', updateByUserId)

    // delete user
    app.use('/users', deleteUserByUserId)

    //delete all users
    app.use('/users', deleteAllUsers)
  }
}