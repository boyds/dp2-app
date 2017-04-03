
var ProductModel = function(start, count) {
    var self = this;
    self.start = start;
    self.count = count;

    // @public result: Result set of product data as object
    self._result = {};

    var products = firebase.database().ref('products');
    var products_paginated = products.orderByKey().limitToFirst(self.count);

    products_paginated.on('child_added', function(data) {
        self._result[data.key] = data.val();
        m.redraw();
    });

    products_paginated.on('child_changed', function(data) {
        self._result[data.key] = data.val();
        m.redraw();
    });

    products_paginated.on('child_removed', function(data) {
        delete self._result[data.key];
        m.redraw();
    });
};

ProductModel.prototype.results = function() {
    return this._result;
};
