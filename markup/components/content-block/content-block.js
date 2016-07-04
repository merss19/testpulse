
// reviews
let reviews = $('.review__user');

reviews .owlCarousel({
    items: 1,
    pagination: true,
    singleItem: true,
    paginationSpeed: 400
});

$('.review__nav-left').click(function () {
    let $that = $(this),
        parent = $that.parent(),
        carousel = parent.siblings('.owl-carousel');
    carousel.trigger('owl.next');
});
$('.review__nav-right').click(function () {
    let $that = $(this),
        parent = $that.parent(),
        carousel = parent.siblings('.owl-carousel');
    carousel.trigger('owl.prev');
});

