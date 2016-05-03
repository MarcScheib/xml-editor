var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var outputRoot = 'dist/';
var cssRoot = 'style/';
var exportSrvRoot = 'export/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  output: outputRoot,
  cssOutput: cssRoot,
  exportSrv: exportSrvRoot,
  doc:'./doc',
  packageName: pkg.name
};
