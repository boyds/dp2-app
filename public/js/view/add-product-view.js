// Add product module
// ---

var AddProduct = {};

AddProduct.oninit = function() {
    var state = this;
};

AddProduct.view = function(vdom) {
    var state = this;
    return [
        m('h3', 'Add Product'),
        m('form', [
            m('div.row', [
                // Left half
                m('div.six.columns', [
                    m('label[for=productName]', "Name"),
                    m('input.u-full-width[type=email][id=productName][placeholder=Product Name]')
                ]),
                // Right half
                m('div.six.columns', [
                    m('label[for=productCategory]', "Category"),
                    m('select.u-full-width[id=productCategory]', [
                        m('option[value=Cat1]', "Category 1"),
                        m('option[value=Cat2]', "Category 2")
                    ])
                ])
            ]),
            m('input.button-primary[type=submit][value=Add]')
        ])
    ];
};
