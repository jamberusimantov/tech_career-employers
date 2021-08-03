const downloads_Router = require('express').Router()
const downloads_ctrl = require('./downloads_ctrl')

downloads_Router.get('/download/:Id', downloads_ctrl.fetchFile)

module.exports = downloads_Router;