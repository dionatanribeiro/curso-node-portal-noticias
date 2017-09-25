module.exports.buscar_noticia = function(app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var criteria = req.query;

    noticiasModel.getNoticia(criteria, function(error, result) {
        res.render('noticias/noticia', {
            noticias: result
        });
    });
}

module.exports.buscar_noticias = function(app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result) {
        res.render('noticias/noticias', {
            noticias: result
        })
    });
}