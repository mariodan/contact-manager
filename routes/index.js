'use strict'

/**
 * Index to load all separate routes files
 * Routes should be grouped by category: users, contacts, payments, etc
 * to better manage a fast growing api app
 *
 * @param router
 * @returns {*}
 */

module.exports = function(router){
    require('./contact')(router)
    return router
}
