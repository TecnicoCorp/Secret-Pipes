# Examples

 - [Node Server.js](#Target%20Server%20Application)
 - [Secrets.js Secrets Export](#Secrets%20Files)

### Target Server Application
```js
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
```

### Secrets Files
```js
'use strict';
exports.default = {
	'DB CREDENTIAL STRING':'supersecret',
	apiHeaders: {
		'url match': {
			'X-API-KEY':''
		}
	},
	apiQueryExt: {
		'url match': [
			''
		]
	},
	certs: [
		''
	],
	'PRIV_KEY':``,
	'PUB_KEY':``,
};
```