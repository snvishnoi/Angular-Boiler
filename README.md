# Angular 4.x webpack with bootstrap
## Install dependencies
Run
```
npm install
```
## Run
To start a webserver:
```
webpack-dev-server --inline --progress --port 8081
```
Or you can add start command in scripts section of package.json like this:
```
"scripts": {
  "start": "webpack-dev-server --inline --progress --port 8081"
  "test": "karma start",
  "build": "rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail"
},
```

After you add to command in package.json you can run the webserver like this:
```
npm start
```
## Create production bundle
```
npm run build
```  
## Credit
https://github.com/softchris/angular4-webpack
