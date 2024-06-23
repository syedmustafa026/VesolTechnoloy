(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }

    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
            .done(done_func)
            .fail(fail_func);
    });

})(jQuery);

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Center the map at a specific location
        zoom: 10
    });

    // Create markers and set their positions
    var marker1 = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // San Francisco
        map: map,
        title: 'San Francisco'
    });

    var marker2 = new google.maps.Marker({
        position: { lat: 37.8044, lng: -122.2711 }, // Oakland
        map: map,
        title: 'Oakland'
    });
}