
// reviews
var reviews = $('.review__user');

reviews .owlCarousel({
    items: 1,
    pagination: true,
    singleItem: true,
    paginationSpeed: 400,
    beforeInit: function(){
        var items = $('.review__user-item');
        $('.owl-sum').text(items.length);
        console.log(items.length);
    }
});

$('.review__nav-left').click(function () {
    var $that = $(this),
        parent = $that.parent(),
        carousel = parent.siblings('.owl-carousel'),
        sum = $('.owl-sum').text(),
        items = carousel.find('.owl-item').length,
        itemsLen = items.length,
        current = $('.owl-current').text();
    carousel.trigger('owl.prev');

    current--;
    if(current >= 1){
        $('.owl-current').text(current);
    } else {
        $('.owl-current').text(sum);
    }

});
$('.review__nav-right').click(function () {
    var $that = $(this),
        parent = $that.parent(),
        carousel = parent.siblings('.owl-carousel'),
        sum = $('.owl-sum').text(),
        items = carousel.find('.owl-item').length,
        current = $('.owl-current').text();
    carousel.trigger('owl.next');
    console.log(items);
    current++;
    if(current <= items){
        console.log(current);
        $('.owl-current').text(current);
    } else {
        $('.owl-current').text(1);
    }
});

