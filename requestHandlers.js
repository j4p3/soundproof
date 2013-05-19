var fs = require('fs');

//  render views
function render(response, view, type) {
  type = type || 'html';

  console.log("rendering view " + view);
  fs.readFile(view + '.' + type, function (err, data) {
    if (err) { throw err; }
    response.writeHead(200, {"Content-Type": "text/" + type});
    response.write(data);
    response.end();
  });
}

function home(response, request) {
  render(response, 'views/index');
}

function favicon(response, request) {
  //  prevent 404 on obnoxious double request for favicon
  response.writeHead(200, {'Content-Type': 'image/x-icon'});
  response.end();
}

function map(response, request) {
  response.writeHead(200, {'Content-Type': 'text/javascript'});
  fs.readFile('js/map.js', function (err, data) {
    if (err) { throw err; }
    response.write(data);
    response.end();
  });
}

exports.home = home;
exports.favicon = favicon;
exports.map = map;