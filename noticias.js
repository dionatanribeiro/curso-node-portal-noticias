var http = require('http');

var server = http.createServer(function (req, res) {
    
    var categoria = req.url;

    if (categoria === '/tecnologia') {
        res.end("<html><body>Portal de Tecnologia</body></html>");
    }

    if (categoria === '/moda') {
        res.end("<html><body>Portal de Moda</body></html>");
    }

    if (categoria === '/beleza') {
        res.end("<html><body>Portal de Beleza</body></html>");
    }

    res.end("<html><body>Portal de Noticias</body></html>");

});

server.listen(3000);