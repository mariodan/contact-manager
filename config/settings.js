'use strict'


module.exports = {
    repoName: 'contact-manager-api',
    version: 'v1.0',
    rootApiURI: '/api',
    winston: {
        file: {
            options: {
                level: 'info',
                silent: false,
                timestamp: true,
                maxsize: 5000000,
                maxFiles: 10,
                json: true
            }
        },
        console: {
            options: {
                level: 'info',
                silent: false,
                timestamp: true
            }
        }
    }
}
