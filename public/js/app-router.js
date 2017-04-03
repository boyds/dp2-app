// Handles single page application routing (so the page doesn't have to refresh & reauth)
// ---

$(document).on("authentication_complete", function(e) {
    var rel = $("#page-root").get(0);

    // Use full client-sided routing strategy
    m.route.prefix("#!");

    // Master SPA routes
    m.route(rel, "/dashboard", {
        "/dashboard": Dashboard,
        "/products": Products,
        "/reports": Reports
    });
});
