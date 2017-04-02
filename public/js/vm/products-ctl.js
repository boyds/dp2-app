// Products list module
// ---

var Products = {};

Products.oninit = function() {
    var state = this;
    state.name = 'Products';
};

Products.view = function(vdom) {
    var state = this;
    return m('h3', state.name);
};
