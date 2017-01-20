'use strict'
const _ = require('lodash')
const utils = require('../utils/utility')
const testData = require('../test/data')

const Model = module.exports = function(label, properties, db){
    this.label = label || {}
    this.fields = properties || {}
    this.__db = db
    this.data = {}
}

const M = Model.prototype

M.instantiate = function(db){
    this.__db = db
    return this
}

M.instance = function(){
    return this
}

M.db = function(db){
    if(!db) return this.__db
    this.__db = db
    return this.__db
}

M.getFields = function(){
    return _.keys(this.fields)
}

M.instantiateHelper = function() {
    var instance = new Model(this.label, this.properties, this.__db)
    instance.db(this.db())
    instance.data = {}
    instance.fields = this.fields

    const properties = {}
    _.each(this.getFields(), prop => {
        properties[prop] = {
            get: utils.wrapGet(instance, prop),
            set: utils.wrapSet(instance, prop),
            enumerable: true,
            configurable: true
        }
    })

    Object.defineProperties(instance, properties)

    return instance
}


M.set = function(property, value){
    if(_.isUndefined(property)) return this
    this.data[property] = value || null
}


M.get = function(property) {
    if(this.data.hasOwnProperty(property)) {
        return this.data[property]
    }
    throw new Error(`No such model property: ${property} !`)
}


M.populate = function(data) {
    for (var key in data) {
        var value = data[key]
        if (data.hasOwnProperty(key)) {
            this.set(key, value)
        }
    }
}


M.findAll = function(){
    return Promise.resolve(testData.contacts)
}


M.findById = function(userId){
    const id = parseInt(userId, 10)
    return new Promise((resolve, reject) => {
        const contact = _.find(testData.contacts, {id: id})
        contact ? resolve(contact) : reject(new Error('user not found'))
    })
}


M.findByEmail = function(email){
    return new Promise((resolve, reject) => {
        const contact = _.find(testData.contacts, {email: email})
        contact ? resolve(contact) : reject(new Error('user not found'))
    })
}



M.add = function(inputData){
    testData.contacts.push(inputData)
    return Promise.resolve(inputData)
}


M.delete = function(contactData){
    return contactData ? Promise.resolve() : Promise.reject(new Error('contact not found'))
}


M.update = function(dbContact, userInput){
    //TODO compare & update
    return Promise.resolve(userInput)
}



module.exports = Model

