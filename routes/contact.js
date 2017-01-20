'use strict'


const contactController = require('../controllers/ContactController')


module.exports = function(router){

    router.get('/contacts/:id',     contactController.getById)
    router.get('/contacts',         contactController.getContacts)
    router.put('/contacts/:id',     contactController.updateContact)
    router.post('/contacts',        contactController.addContact)
    router.delete('/contacts/:id',  contactController.deleteContact)

}