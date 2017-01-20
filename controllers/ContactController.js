'use strict'

const utils = require('../utils/utility')
const ContactModel = require('../models/ContactModel')


/**
 * Add new contact
 * @param req
 * @param res
 */
const addContact = function(req, res){
    const inputData = req.body

    ContactModel
        .add(inputData)
        .then(contact => res.status(HTTP.OK).send(contact))
        .catch(err => utils.logResponse(res, err))
}


/**
 * Get contact by id
 * @param req
 * @param res
 */
const getById = function(req, res){
    const userId = req.params.id

    ContactModel
        .findById(userId)
        .then(contact => res.status(HTTP.OK).send(contact))
        .catch(err => utils.logResponse(res, err))
}


/**
 * Get contacts list
 * @param req
 * @param res
 */
const getContacts = function(req, res){

    ContactModel
        .findAll()
        .then(contacts => res.status(HTTP.OK).send(contacts))
        .catch(err => utils.logResponse(res, err))
}


/**
 * Delete contact
 * @param req
 * @param res
 */
const deleteContact = function(req, res){
    const contactId = parseInt(req.params.id, 10)

    ContactModel
        .findById(contactId)
        .then(contact => ContactModel.delete(contact))
        .then(() => res.status(HTTP.OK).send())
        .catch(err => utils.logResponse(res, err))

}


/**
 * Update contact by id
 * @param req
 * @param res
 */
const updateContact = function(req, res){
    const contactId = parseInt(req.params.id, 10)
    const inputData = req.body

    ContactModel
        .findById(contactId)
        .then(contact => ContactModel.update(contact, inputData))
        .then(contact => res.status(HTTP.OK).send(contact))
        .catch(err => utils.logResponse(res, err))
}




module.exports = {
    addContact,
    getById,
    getContacts,
    deleteContact,
    updateContact
}