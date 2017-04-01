
// Create anonymous authenticator provider
firebase.auth().signInAnonymously().then(function(result) {
    $("#authentication-loader").remove();
    // Fire the authentication complete event (handing control over to the SPA router)
    $.event.trigger({ type: "authentication_complete" });
}).catch(function(error) {
    alert("There was a fatal authentication error. Check internet/service connectivity.");
});
