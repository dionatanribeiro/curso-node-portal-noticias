module.exports = function(app) {
    app.get('/noticia', function(req, res) {
        console.log(req.query)
        app.app.controllers.noticias.buscar_noticia(app, req, res)
    });
    
    app.get('/noticias', function(req, res) {
        app.app.controllers.noticias.buscar_noticias(app, req, res)
    });
};
