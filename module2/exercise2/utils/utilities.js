const path = require('path');

const mapRouteToViews = view => path.join(path.dirname(process.mainModule.filename), 'views', view);

module.exports = {
    mapRouteToViews,
}