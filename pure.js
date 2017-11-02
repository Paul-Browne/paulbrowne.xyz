var serveStatic  = require('serve-static');
var compression  = require('compression');
var fs           = require('file-system');
var express      = require('express');
var http         = require('http');
var http2        = require('spdy');
var del          = require('del');
var opn          = require('opn');

require('dotenv').config();

// https server with gzip and http2 (only if cert and key exist)
function server(){
    fs.open('./.env', 'r', (err) => {
        if(err){
            if (err.code === 'ENOENT') {
                console.log('.env file not found');
                console.log("https://localhost:8888 only available when ssl cert and key are found");
                console.log("http://localhost:8888 in use");
                var dist = express();
                dist.use(compression())
                dist.use(serveStatic('./dist', {
                    'extensions': ['html'],
                    'maxAge': 3600000
                }))
                var disthttpsServer = http.createServer(dist);
                disthttpsServer.listen(8888);
                var dev = express();
                dev.use(compression())
                dev.use(serveStatic('./dev', {
                    'extensions': ['html'],
                    'maxAge': 3600000
                }))
                var devhttpsServer = http.createServer(dev);
                devhttpsServer.listen(8887);
            }
        } else {
            fs.readFile('./.env', 'utf8', (err, data) => {
                if( data.indexOf('SSL_CRT_PATH') < 0 || data.indexOf('SSL_KEY_PATH') < 0 ){
                    if(data.indexOf('SSL_CRT_PATH') < 0 ){
                        console.log("no 'SSL_CRT_PATH' found in .env file");
                    }
                    if(data.indexOf('SSL_KEY_PATH') < 0 ){
                        console.log("no 'SSL_KEY_PATH' found in .env file");
                    }
                    console.log("https://localhost:8888 only available when ssl cert and key are found");
                    console.log("http://localhost:8888 in use");
                    var dist = express();
                    dist.use(compression())
                    dist.use(serveStatic('./dist', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var disthttpsServer = http.createServer(dist);
                    disthttpsServer.listen(8888);
                    opn('http://localhost:8888');
                    var dev = express();
                    dev.use(compression())
                    dev.use(serveStatic('./dev', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var devhttpsServer = http.createServer(dev);
                    devhttpsServer.listen(8887);
                    opn('http://localhost:8887');
                } else {
                    sslCrt = process.env.HOME + process.env.SSL_CRT_PATH
                    sslKey = process.env.HOME + process.env.SSL_KEY_PATH
                    var privateKey  = fs.readFileSync(sslKey, 'utf8');
                    var certificate = fs.readFileSync(sslCrt, 'utf8');
                    var credentials = {key: privateKey, cert: certificate};
                    var dist = express();
                    dist.use(compression())
                    dist.use(serveStatic('./dist', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var disthttpsServer = http2.createServer(credentials, dist);

                    disthttpsServer.listen(8888);
                    console.log("https://localhost:8888");
                    //opn('https://localhost:8888');

                    var dev = express();
                    dev.use(compression())
                    dev.use(serveStatic('./dist', {
                        'extensions': ['html'],
                        'maxAge': 3600000
                    }))
                    var devhttpsServer = http2.createServer(credentials, dev);
                    devhttpsServer.listen(8887);
                    console.log("https://localhost:8887");
                    //opn('https://localhost:8887');
                }
            })
        }
    })
}
server();
