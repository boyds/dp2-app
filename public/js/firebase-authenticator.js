
// Create anonymous authenticator provider
firebase.auth().signInAnonymously().then(function(result) {
    $("#authentication-loader").remove();
    $.event.trigger({ type: "authentication_complete" });
}).catch(function(error) {
    alert("There was a fatal authentication error. Check internet/service connectivity.");
});
