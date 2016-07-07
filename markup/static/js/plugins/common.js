'use strict';
$(document).ready(function () {

    // carousel
    var carousel = $('.review__user'),
        sideCarousel = $('.side-banner__list');

    slider(carousel);
    slider(sideCarousel);

    function slider(carousel){
        var left = carousel.parent().find('.nav-left'),
            right = carousel.parent().find('.nav-right'),
            sumN = carousel.parent().find('.owl-sum'),
            curr = carousel.parent().find('.owl-current');

        carousel.owlCarousel({
            items: 1,
            pagination: true,
            singleItem: true,
            paginationSpeed: 400,
            afterInit: function(){
                var items = carousel.find('.owl-item');
                sumN.text(items.length);


            }
        });

        $(left).click(function () {
            var $that = $(this),
                parent = $that.parent(),
                carousel = parent.siblings('.owl-carousel'),
                sum = sumN.text(),
                items = carousel.find('.owl-item').length,
                itemsLen = items.length,
                current = curr.text();
            carousel.trigger('owl.prev');

            current--;
            if(current >= 1){
                curr.text(current);
            } else {
                curr.text(sum);
            }

        });
        $(right).click(function () {
            var $that = $(this),
                parent = $that.parent(),
                carousel = parent.siblings('.owl-carousel'),
                sum = sumN.text(),
                items = carousel.find('.owl-item').length,
                current = curr.text();
            carousel.trigger('owl.next');

            current++;
            if(current <= items){
                console.log(current);
                curr.text(current);
            } else {
                curr.text(1);
            }
        });

    }







    //toggle link

    function toggleLink(selector, link){
        $(selector).on('click', function () {
            var $this = $(this),
                parent = $this.parent(),
                list = parent.find('.toggle-list');
            console.log($this);
            list.toggleClass('toggle-active');

            if (list.hasClass('toggle-active')) {
                $this.addClass('toggle-active').text('Свернуть');
            } else {
                $this.removeClass('toggle-active').text(link);

            }

        });
    }

    toggleLink('.medical-block__watch','Смотреть все');
    toggleLink('.service-block__all','Смотреть весь список услуг');
    toggleLink('.clinic-desc__link','Читать полностью');



    //collapse


    $('[data-toggle="collapse"]').collapse();

    $('.collapse').on('show.bs.collapse', function () {
            var $this = $(this),
                parent = $this.parent(),
                btn = parent.find('[data-toggle="collapse"]');
                console.log(btn);
            btn.addClass('active');


        })
        .on('hide.bs.collapse', function () {
            var $this = $(this),
                parent = $this.parent(),
                btn = parent.find('[data-toggle="collapse"]');
            console.log('hide');
            btn.removeClass('active');

        });

    //filter page

    $('.side-filter__select').selectize();

        //slider
    var filters = [
        {
            "id": "volume",
            "from": 60,
            "to": "90",
            "postfix":" см"

        },
        {
            "id": "height",
            "from": "60",
            "to": "150",
            "postfix":" кг"
        },
        {
            "id": "price-range",
            "from": "1200",
            "to": "4000",
            "postfix":" руб"
        }
    ];


    var filterLen = filters.length;
    for(var i=0; i < filterLen; i++){
        var filter = $('#'+filters[i].id),
            postfix = filters[i].postfix;

        filterIon(filter,postfix);
    }

    function filterIon(filter,postfix){

        filter.ionRangeSlider({
            type: "double",
            grid: false,
            min: filters[i].from,
            max: filters[i].to,
            hide_min_max:true,
            hide_from_to:true,
            values:filters[i].values,
            onStart: function (data) {
                var postfix = filters[i].postfix,
                    from = filter.parent().find('.side-filter__from'),

                    to = filter.parent().find('.side-filter__to');

                from.text(data.min + postfix);
                to.text(data.max + postfix);
            },
            onChange: function (data) {

                var from = filter.parent().find('.side-filter__from'),
                    to = filter.parent().find('.side-filter__to');

                from.text(data.from + postfix);
                to.text(data.to + postfix);
            }
        });
    }

    $('#time').ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 8,
        hide_min_max:true,
        hide_from_to:true,
        values:["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
        onStart: function (data) {

            var
                from =  $('#time').parent().find('.side-filter__from'),

                to =  $('#time').parent().find('.side-filter__to');
            console.log(this.values[this.min]);
            from.text(this.values[this.min]);
            to.text(this.values[this.max]);

        },
        onChange: function (data) {
            console.log(data.from_value);
            var from =  $('#time').parent().find('.side-filter__from'),
                to =  $('#time').parent().find('.side-filter__to');

            from.text(data.from_value);
            to.text(data.to_value);
        }
    });

    $('.filter-result').on('click', '.filter-result__btn', function(){
        var $this = $(this),
            sibling = $this.siblings();
        console.log(sibling);

        if($this.hasClass('active')){
            return;
        } else {
            sibling.removeClass('active');
            $this.addClass('active');
        }

    });

    $('.tools__item').popover({
        container:'.tools'
    });

        //metro

    $('.metro__more').on('click', function(){
        var $this = $(this),
            parent = $this.parent(),
            item = parent.find('.metro__list-item');

        item.removeClass('hide');
        $this.addClass('hide');
    });

});

