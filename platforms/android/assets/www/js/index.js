var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.testZone = {};
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        console.log("Ready");
        app.testZone = document.getElementById("test-zone");
        app.testZone.innerHTML = "Ready";
    }
};