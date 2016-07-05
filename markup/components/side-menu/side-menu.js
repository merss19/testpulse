'use strict';
$(document).ready(function () {
    $('.side-menu__link').collapse();

    $('.side-menu__sub-list').on('show.bs.collapse', function () {
        var $this = $(this),
            parent = $this.parent(),
            btn = parent.find('.side-menu__link');

        btn.removeClass('arrow-left').addClass('arrow-down');

    })
    .on('hide.bs.collapse', function () {
        var $this = $(this),
            parent = $this.parent(),
            btn = parent.find('.side-menu__link');

        btn.removeClass('arrow-down').addClass('arrow-left');

    });

});

