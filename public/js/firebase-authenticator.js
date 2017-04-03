// Handles database authentication
// ---

// Create anonymous authenticator provider
firebase.auth().signInAnonymously().then(function(result) {
    // Fire the authentication complete event (handing control over to the SPA router)
    $.event.trigger({ type: "authentication_complete" });
}).catch(function(error) {
    console.error(error);
    // FIXME: If there is actually an authentication error, show a page error w/ a retry button rather than an alert()
    alert("There was a fatal authentication error. Check internet/service connectivity.");
});
