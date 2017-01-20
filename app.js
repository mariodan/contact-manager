'use strict'

const winston = require('winston')
const express = require('express')
const settings = require('./config/settings')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('express').Router()

const authMiddleware = require('./middleware/auth')
const logMiddleware = require('./middleware/log')

const httpCodes = require('./config/httpCodes')
const ErrorMessage = require('./common/ErrorMessage')
const utils = require('./utils/utility')
const initializeModels = require('./common/initializeModels')


/**
 * Load env
 */
utils.loadEnvironment('./')

const app = express()

/**
 * Initialize models
 */
initializeModels()

/**
 * Setup globals
 */
global.winston = winston
global.HTTP = httpCodes
global.errMessage = ErrorMessage


/**
 * Settings
 */
app.use(bodyParser.json({limit: '2mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cookieParser())


/**
 * Auth middleware
 */
app.use(authMiddleware)

/**
 * Log requests
 */
app.use(logMiddleware)

/**
 * Routes
 */

const routes = require('./routes/')(router)
app.use(settings.rootApiURI, routes)


/**
 * App start
 * Always log essential info about application startup
 */
app.listen(process.env.API_PORT, process.env.API_HOST, function () {
    winston.info('[ environment ]: %s', process.env.NODE_ENV)
    winston.info('[ api ] ' + settings.repoName + ' ' + settings.version + ' running on %s, api URI: %s', process.env.API_URL, settings.rootApiURI)
})