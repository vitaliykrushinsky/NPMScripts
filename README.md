# NPMScripts
Use NPM scripts to run build tasks
___
An alternative to using Grunt and Gulp that is using NPM scripts functionality wich is built in package.json file
```javascript
"scripts": {
  "lint": "jshint development/js/app.js",
  "build": "npm run mincss | npm run minjs",
  "mincss": "cleancss development/css/style.css -o production/css/style.min.css",
  "minjs": "uglifyjs development/js/app.js -c -m -o production/js/app.js",
  "start": "live-server",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
To run task just use for example **npm run lint** in command prompt.
NPM has some shorthand commands such as:
+ **npm start**
+ **npm stop**
+ **npm test**

and we can bind to those commands own sсripts

The available options like:
+ -o, --output
+ -m, --mangle
+ -c, --compress

see for documentation of scripts
