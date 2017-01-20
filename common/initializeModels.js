'use strict'


function initializeModels(dbTest) {
    let db = global.DB
    if(dbTest) {
        db = dbTest
    }
    let ContactModel = require('../models/ContactModel')

    ContactModel = ContactModel.instantiate(db)
    global.ContactModel = ContactModel
}

module.exports = initializeModels
