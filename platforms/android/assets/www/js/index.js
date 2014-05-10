var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.testzone = {};
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
    },

    onDeviceReady: function() {
        console.log("Ready");
        app.testzone = document.getElementById("test-zone");
        app.testzone.innerHTML = "Ready";
    },
    onPause: function() {
        app.testzone.innerHTML += "<br />Paused";
    },
    onResume: function() {
        app.testzone.innerHTML += "<br />Resumed";
    },
};