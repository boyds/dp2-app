// Products list module
// ---

var Products = {};

Products.oninit = function() {
    var state = this;
    // FIXME: Always request 1000 items instead of paginating
    state.model = new ProductModel(0, 1000);
};

Products.view = function(vdom) {
    var state = this;
    return [
        m('h3', 'Products'),
        m('div', Object.values(state.model.results()).map(m.bind(null, 'p')))
    ];
};
