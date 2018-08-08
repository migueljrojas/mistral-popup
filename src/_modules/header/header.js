'use strict';

// Constructor
var Header = function() {
    $( document ).ready(function() {
        var popup = $('.popup');
        var close = $('.popup__close');

        setTimeout(function(){
            popup.addClass('-open');
        }, 500);

        close.on('click', function() {
            popup.removeClass('-open');
        });
    });
};

module.exports = Header;
