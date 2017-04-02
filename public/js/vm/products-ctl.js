
var Products = {};

Products.oninit = function() {
    var state = this;
    state.name = 'Products';
};

Products.view = function(state) {
    var state = this;
    return m('h3', state.name);
};
