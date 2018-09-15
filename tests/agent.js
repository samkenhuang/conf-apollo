const apollo = require('../lib/apollo')


const config = {
    configServerUrl: 'http://192.168.100.184:8090',
    appId: '24',
    clusterName: 'default',
    namespaceName: [ 'fbcore' ],
    cachedFileDir: `${__dirname}`,
    interval: 1000
}

new apollo(config)