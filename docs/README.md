# Secret-Pipes
#### Application Secrets Management and Isolation
#### For Node.js projects, or any software accepting STDIN


As the name suggests,  `SECRET-PIPES` is a framwork to keep, manage, and aggrigate your secrets in an evironment only accessable to an elevated user, and only pipe your secrets at runtime to keep them as ephemiral as possile on your system and in your target application.

Most of the code is just here to provide a examples and a basic starting point. <br /> Customize it and make it your own; implement runtime generation of your secrets, pull them from from encrypted vaults, and/or set up conditions to pass different secrets for different environments.

Use `git` or `npm` to get notified of changes to best practices and security changes/vulnerabilities. Or you can completely replicate this in a few lines of code.

#### Benefits over ENV or uncommited JSON files

| Feature  | Secret-Pipes | ENV/.ENV | Static Imports |
| :-------: | :-------: | :-------: | :-------: |
| Generate new secrets at runtime | :heavy_check_mark: | :x: | :x: |
| Aggrigate External Sources | :heavy_check_mark: | :x: | :x: |
| Seperate Concerns By Process | :heavy_check_mark: | :x: | :x: |
| Reduce global references | :heavy_check_mark: | :x: | :x: |
| Encrypt Secrets at Rest  | :heavy_check_mark: | :wavy_dash: | :wavy_dash: |
| Restrict files with User/Group Permissions | :heavy_check_mark: | :wavy_dash: | :wavy_dash: |
| Dereference/Remove secrets from memory if no longer needed | :heavy_check_mark: | :wavy_dash: | :wavy_dash: |

##### Plans: Finding a means to place the secrets into protected memory, and only pass references/pointer and read permissions.

#

## Table of Contents

- [Installation](#Installation)
	- [git](#Git)
	- [npm/yarn](#NPM%20module%20is%20WIP)
	- [npx](#NPM%20module%20is%20WIP)
- [Usage](#Usage)
	- [Secrets](#Secrets%20Files)
	- [App Import](#Application%20Imports)
	- [Run](#Node%20Execution)
	- [Debug](#Run%20in%20Debug)
- [Examples](/docs/Examples.md)
- [Known Issues](#Known%20Issues)
- [Contributing](/docs/CONTRIBUTING.md)
- [Security Policy](/docs/SECURITY.md)
- [Code of Conduct](/docs/CODE_OF_CONDUCT.md)

## Installation
#### Git
```bash
	cd /some/protected/directory

	git clone https://github.com/TecnicoCorp/Secret-Pipes.git

	# Place js scripts that export your secrets in ./secure
```
#### NPM module is WIP
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
	// main.js or server.js or index.js
	'use strict';
	const fs = require('fs');
	let envTmp = fs.readFileSync(0).toString();
	envTmp = JSON.parse(envTmp);

	const someOtherModule = {middleware:{}};
	someOtherModule.middleware.secrets = envTmp.mySecret2;
	// Clear what you can from the top-level variables.
	envTmp.mySecret2 = undefined;
```

### Node Execution
```bash
	# NPM start
	node ..\\secret-pipes\\lib\\secret.js | node server.js
	# NPM dev - Known issues with nodemon, see known issues
	nodemon -e js --exec \"node ..\\secret-pipes\\lib\\secret.js | node server.js\"
```
#### Run in Debug
##### VS Code `lauch.json` in Windows batch
```json
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Run DEV",
			"runtimeExecutable": "${workspaceRoot}/run.bat"
		},
	]
```
```bat
	ECHO OFF
	node ..\secret-pipes\secret.js | node --inspect-brk=127.0.0.1:%2 server.js
```
##### VS Code `lauch.json` in Linux Bash


```json
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Run DEV",
			"runtimeExecutable": "${workspaceRoot}/run.sh"
		},
	]
```
```sh
	#!/bin/bash
	node ..\secret-pipes\secret.js | node --inspect-brk=127.0.0.1:%2 server.js
```

## Known Issues
 - Nodemon:
 Running in Nodemon seems to cause something to get cached such that if an error is thrown to Nodemon on a reload, it returns `fs` module errors until it is closed and some indeterminate amount of time passes before being started again. (The issue will be linked if this assertion holds true after an initial review)