'use strict';
$(document).ready(function () {
    $('.side-block__link').collapse();

    $('.side-block__sub-list').on('show.bs.collapse', function () {
        var $this = $(this),
            parent = $this.parent(),
            btn = parent.find('.side-block__link');

        btn.removeClass('arrow-left').addClass('arrow-down');
        console.log(btn);
    })
    .on('hide.bs.collapse', function () {
        var $this = $(this),
            parent = $this.parent(),
            btn = parent.find('.side-block__link');

        btn.removeClass('arrow-down').addClass('arrow-left');
        console.log(btn);
    });

});

