'use strict';

const axios = require('axios')
const assert = require('assert')
const fs = require('fs')

class Apollo {
    constructor(config) {
        const { configServerUrl, appId, clusterName, namespaceName, clientIp, cachedFileDir } = config
        assert(cachedFileDir, 'cachedFileDir is required')
        assert(configServerUrl, 'configServerUrl is required')
        assert(Array.isArray(namespaceName), true, 'namespaceName is required')
        assert(appId, 'appId is required')
        assert(clusterName, 'clusterName is required')
        this.config = config
        this.payloads = this.getUriPathFromConfig()
        this.payloads.map(function (payload) {
            this.run(payload)
        }.bind(this))
    }

    getUriPathFromConfig() {
        const { configServerUrl, appId, clusterName, namespaceName, clientIp, cachedFileDir } = this.config

        return namespaceName.map(n => {
            let path = `${cachedFileDir}/${n}.json`
            if (!fs.existsSync(path)) {
                fs.appendFileSync(path, '')
            }
            return {
                uri: `${configServerUrl}/configfiles/json/${appId}/${clusterName}/${n}?ip=${clientIp}`,
                path: path,
                currentData: fs.readFileSync(path, 'utf8')
            }
        })
    }

    run(payload) {
        let { interval } = this.config
        interval = interval ? interval : 10000
        let option = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            responseType: 'json',
            responseEncoding: 'utf8'
        }
        setInterval(() => {
            axios.get(payload.uri, option).then(function (response) {
                if (response.status == 200) {
                    let responseData = JSON.stringify(response.data)
                    if (payload.currentData !== responseData) {
                        fs.writeFile(payload.path, responseData, () => {
                            payload.currentData = responseData
                        })
                    }
                }
            }).catch(function (err) {
                console.log(err)
            })
        }, interval)
    }
}

module.exports = Apollo
