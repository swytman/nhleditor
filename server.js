const http = require('http');
const express = require('express');
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
var db = new sqlite3.Database('./data/mydb.db');



app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
    extended: true
}));

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

require('./src/server/routes/team_routes')(app, db);

var gamesRouter = express.Router({mergeParams: true});
require('./src/server/routes/game_routes')(gamesRouter, db);
app.use('/api/games', gamesRouter)

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
