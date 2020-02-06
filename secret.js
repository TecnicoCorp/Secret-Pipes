'use strict';
const fs = require('fs');
const paths = require('path');
const secretsDir = 'secure';
fs.readdir(secretsDir, function (err, files) {
    let len = files.length;
    let packagedSecrets = {};
    for (var i = 0; i < len; i++) {
        if (files[i].substr(files[i].length-2,2) === 'js'){
            let f = paths.join(secretsDir, files[i]);
            let stat = fs.lstatSync(f);
            if (stat.isFile() || stat.isSymbolicLink()){
                let m = require(f);
                Object.assign(packagedSecrets,m);
            }
        }
    }
    process.stdout.write(JSON.stringify(packagedSecrets));
});