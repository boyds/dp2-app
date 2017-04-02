// Dashboard landing page module
// ---

var Dashboard = {};

Dashboard.oninit = function() {
    var state = this;
    state.name = 'Dashboard';
};

Dashboard.view = function(state) {
    var state = this;
    return m('h3', state.name);
};
