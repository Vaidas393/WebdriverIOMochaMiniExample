//merge parent conf object + add new changes in uat conf(baseurl, connectiontimeour)
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {

baseUrl : "https://companiesPrivateUrl"

})
