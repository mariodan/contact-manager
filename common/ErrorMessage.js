'use strict'


/**
 * Error Message contract for entire app
 * Constructs error message object from input
 *
 * Message to be returned in res.send()
 *
 * @param errObject
 * @param message
 * @param data
 * @param httpCode
 * @constructor
 */
function Message(errObject, message, data, httpCode) {
    this.constructor.prototype.__proto__ = Error.prototype
    if(Error.captureStackTrace)	Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = 'error'
    this.type = 'Exception'
    this.stack = (new Error()).stack
    this.message = errObject ? errObject.message : message
    this.httpCode = httpCode
    this.data = errObject || data
}


/**
 * Constructs error message from json object
 * @param jsonObj
 * @param httpCode
 * @constructor
 */
function MessageFromJson(jsonObj, httpCode) {
    this.constructor.prototype.__proto__ = Error.prototype
    if(Error.captureStackTrace)	Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.type = 'Exception'
    this.httpCode = httpCode
    this.stack = (new Error()).stack
    this.status = 'error'
    this.message = jsonObj.message
    this.data = jsonObj.data
}


function getMessage(errObject) {
    let msg = {
        status: errObject.status || 'error'
    }
    msg['data'] = errObject.data ? errObject.data : errObject.type || errObject.message
    msg['message'] = errObject instanceof Error ? errObject.message : errObject.name
    msg['code'] = errObject.httpCode || errObject.code || 500
    return msg
}


module.exports = {
    Message,
    MessageFromJson,
    getMessage
}