# Secret-Pipes
#### Application Secrets Management and Isolation
#### For Node.js and other JS projects

#

As the name suggests,  `SECRET-PIPES` is a framwork to keep, manage, and aggrigate your secrets in an evironment only accessable to an elevated user, and only pipe your secrets at runtime to keep them as ephemiral as possile on your system and in your target application.

Most of the code is just here to provide a examples and a basic starting point. <br /> Customize it and make it your own; implement runtime generation of your secrets, pull them from from encrypted vaults, and/or set up conditions to pass different secrets for different environments.

<br />

## Installation

```bash
	cd /some/protected/directory

	git clone https://github.com/TecnicoCorp/Secret-Pipes.git

	# Place js scripts that export your secrets in ./secure
```
<br />

## Usage

### Secrets files
```js
	// ./secure/secret1.js
	exports.default = {
		mySecret:'some secret text'
	}
	// ./secure/someotherSecret.js
	const newSecret = function() {
		return 'some runtime secret';
	}
	exports.default = {
		// make sure you have globally unique names for all root-
		// level objects, by aliasing if nessecary. 
		mySecret2:newSecret()
	}
```

### Application Imports
```js
	'use strict';
	const fs = require('fs');
	let envTmp = fs.readFileSync(0).toString();
	envTmp = JSON.parse(envTmp);

	const someOtherModule = {middleware:{}};
	someOtherModule.middleware.secrets = envTmp.mySecret2;
	// Clear what you can from the top-level variables.
	envTmp.mySecret2 = undefined;
```


