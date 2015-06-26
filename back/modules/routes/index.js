module.exports = {
  createRoute: function(router, element, index, array) {
    return router[element.method](element.url, element.callback);
  }
}