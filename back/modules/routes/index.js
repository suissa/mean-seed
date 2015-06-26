var Routes = {
  router: {}
, createRoute: function(element, index, array) {
    return Routes.router[element.method](element.url, element.callback);
  }
, createModuleRoutes: function(router, routes) {
    if(router) {
      Routes.router = router;
    }
    if(Routes.router === {} || Routes.router === null || Routes.router === undefined)
      return false;
    return routes.forEach(Routes.createRoute);
  }
}

module.exports = Routes;