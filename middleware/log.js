'use strict'

/**
 * Log request based on global debug(true) var
 * @param req
 * @param res
 * @param next
 */
module.exports = function(req, res, next){
    if(true) {
        winston.info(req.method + ' ' + req.url)
    }
    next()
}
