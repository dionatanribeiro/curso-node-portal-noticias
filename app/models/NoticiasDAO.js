function NoticiasDAO(connection) {
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback)
}

NoticiasDAO.prototype.getNoticia = function(criteria, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + criteria.id_noticia, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    this._connection.query('INSERT INTO noticias set ?', noticia, callback)
}

NoticiasDAO.prototype.getUltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function() {
    return NoticiasDAO;
}