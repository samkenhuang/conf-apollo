const apollo = require('../lib/apollo')


const config = {
    configServerUrl: 'http://192.168.100.184:8090',
    appId: '24',
    clusterName: 'default',
    namespaceNames: [ 'fbcore', 'platform.common_snape_config' ],
    cachedFileDir: `${__dirname}`,
    interval: 5000
}

new apollo(config)