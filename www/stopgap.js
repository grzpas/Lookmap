function StopGap() {
    function deviceready() {
        // fire off deviceready
        var e = document.createEvent('Events');
        e.initEvent('deviceready');
        document.dispatchEvent(e);
    }

    window.PhoneGap = {};
    window.device = { phonegap: "In browser;" };
    navigator.notification = {
        alert: function (message, callback, title, buttonCaption) {
            alert(message);
        }
    };
    deviceready();
}