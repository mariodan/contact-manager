'use strict'
const Model = require('./Model')

const Contact = new Model('Contact', {
    id: '',
    email: '',
    lastName: '',
    firstName: '',
    group: '',
    passwordHash: '',
    lastLogin: 0,
    lastLogout: 0
}, global.DB)

module.exports = Contact