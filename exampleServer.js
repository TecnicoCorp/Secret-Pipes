'use strict';
const fs = require('fs');
const env = (function () {
    let envTmp = fs.readFileSync(0).toString();
    envTmp = JSON.parse(envTmp);
	
    envTmp.PRIV_KEY = `${envTmp.PRIV_KEY.replace(
        /\\n+/g,
        `
	`
    )}`;
    envTmp.PUB_KEY = `${envTmp.PUB_KEY.replace(
        /\\n+/g,
        `
	`
    )}`;
    return envTmp;
})();
if (env.PRIV_KEY) {
    process.env.PRIV_KEY = env.PRIV_KEY;
}
if (env.PUB_KEY) {
    process.env.PUB_KEY = env.PUB_KEY;
}
const axios = require('axios');
const apiReq = axios.create();
apiReq.defaults.headers.common['User-Agent'] = 'Secrets Manager';
apiReq.interceptors.request.use(function (config) {
    if (env.apiHeaders[config.baseURL]) {
        Object.assign(config.headers,env.apiHeaders[config.baseURL]);
    }
    return config;
});