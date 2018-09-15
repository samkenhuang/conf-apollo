# conf-apollo
携程apollo node client

## 使用方法
启动一个agent,此agent负责从apollo中同步配置到指定的文件目录
```js
const config = {
    configServerUrl: 'http://192.168.100.184:8090',
    appId: '24',
    clusterName: 'default',
    namespaceName: [ 'fbcore' ],
    cachedFileDir: `${__dirname}`,
    interval: 1000
}

new apollo(config)
```
