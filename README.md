# conf-apollo
[携程apollo](https://github.com/ctripcorp/apollo) node client

## 安装
```sh
npm install conf-apollo
```

## 使用方法
启动一个agent,此agent负责从apollo中同步配置到指定的文件目录
```js
const apollo = require('conf-apollo')

const config = {
    configServerUrl: 'http://192.168.100.184:8090',
    appId: '24',
    clusterName: 'default',
    namespaceNames: [ 'fbcore', 'platform.common_snape_config' ],
    //缓存文件地址
    cachedFileDir: `${__dirname}`,
    // 同步时间间隔
    interval: 10000
}

// 开启agent, 定时同步配置
new apollo(config)
```
