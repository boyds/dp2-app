
var Reports = {};

Reports.oninit = function() {
    var state = this;
    //state.name = 'Reports';
};

Reports.view = function(state) {
    var state = this;

    return [
        m('h3', 'Reports'),
        m('table.u-full-width', [
            m('thead',
                m('tr', [
                    m('th', 'Report'),
                    m('th', 'Export')
                ])
            ),
            m('tbody', [
                // FIXME: load these report types automatically from an object
                m('tr', [
                    m('td', [
                        m('h6', 'Product Catalog Report'),
                        m('p', 'Digital catalog of all products and assosciated information.')
                    ]),
                    m('td', m('button', '.CSV'))
                ]),
                m('tr', [
                    m('td', [
                        m('h6', 'Stock Prediction Report'),
                        m('p', 'Prediction of stock levels based on current stock levels and sales forecast.')
                    ]),
                    m('td', m('button', '.CSV'))
                ])
            ])
        ])
    ];
};
