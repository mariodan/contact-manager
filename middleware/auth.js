'use strict'


/**
 * Authorization middleware
 * @param req
 * @param res
 * @param next
 */
const authorization = function(req, res, next){

    let isAccessAllowed = true
    if(isAccessAllowed) {
        next()
    } else {
        winston.error('Unauthenticated!')
    }

}

module.exports = authorization
