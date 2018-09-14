#!/usr/bin/env node
/**
 * 目前插件并不支持局部热更新
 * @type {*|{remoteConfigService, remoteConfigServiceSkipCache, remoteConfigServiceSikpCache, remoteConfigServiceFromCache, createEnvFile, setEnv}}
 */
const apollo = require('../lib/apollo')


const config = {
    configServerUrl: 'http://192.168.100.184:8090',
    appId: '24',
    clusterName: 'default',
    namespaceName: [ 'fbcore', 'application' ],
    cachedFileDir: `${__dirname}`,
    interval: 1000
}

new apollo(config)