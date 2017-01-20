'use strict'


/**
 * Log & send response
 * @param res
 * @param err
 */
const logResponse = function(res, err){
    const m = errMessage.getMessage(err)

 	winston.error(m)
    if(err.stack) {
        winston.error(err.stack)
    } else {
        winston.error(err)
    }
    return res.status(err.httpCode || HTTP.INTERNAL_SERVER_ERROR).jsonp(m)
}

/**
 * Get model object properties
 * @param instance
 * @param prop
 * @returns {Function}
 */
const wrapGet = function(instance, prop){
    return function(){
        return instance.get(prop)
    }
}

/**
 * Set model object properties
 * @param instance
 * @param prop
 * @returns {Function}
 */
const wrapSet = function(instance, prop){
    return function(newValue){
        return instance.set(prop, newValue)
    }
}




/**
 *
 * @param lookInPath
 */
const loadEnvironment = function(lookInPath){
    const path = require('path')
    const HOME = lookInPath || process.env.HOME
    const APP_ENV_FILE = 'development.env'
    const appPath = path.join(HOME, APP_ENV_FILE)
    require('dotenv').config({ path: appPath })
}


module.exports = {
    logResponse,
    loadEnvironment,
    wrapGet,
    wrapSet
}