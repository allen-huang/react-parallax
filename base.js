/* global window, document */

'use strict';

window.onscroll = function() {
    // http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    var scrollRange =  window.pageYOffset;
    var target = document.getElementById('bg');
    document.getElementById('console').innerHTML = scrollRange;

    if (scrollRange < 0) {
        target.style.backgroundSize = (100 - 0.2 * scrollRange) + '%';
    } else {
        target.style.backgroundPositionY = 50 + (0.2 * scrollRange) + '%';
    }
};
