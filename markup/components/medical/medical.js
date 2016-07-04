$('.medical-block__watch').on('click', function () {
    var $this = $(this),
        parent = $this.parent(),
        list = parent.find('.medical-block__list');

    list.toggleClass('medical-block__list_hide');

    if (list.hasClass('medical-block__list_hide')) {
        $this.removeClass('medical-block__watch_active').text('Смотреть все');
    } else {
        $this.addClass('medical-block__watch_active').text('Свернуть');
        console.log($this.text());
    }

});

