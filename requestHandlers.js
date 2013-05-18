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

exports.home = home;