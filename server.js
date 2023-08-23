var http = require('http');
// console.log(http);
//'200': 'OK',  '404': 'Not Found', 이런게 나옴 

var fs = require('fs');
// console.log(fs);
//request: [Function: request],  Server: [Function: Server] 이런게 나옴

function mySetting(request, response) {

    var url = request.url;

    if (request.url === '/') {
        url = '/index.html';
    }

    if (request.url === '/about') {
        url = '/about.html';
    }

    response.writeHead(200, {
        'Content-Type': 'text/html'
    }); // 머릿말 작성 완료
    var htmlFile = fs.readFileSync(__dirname + url); // 응답해줄 html 붙이기
    response.end(htmlFile);
};

var app = http.createServer(mySetting);

app.listen(8383, function () {
    console.log('listening on 8383');
})