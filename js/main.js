$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали', // Set a custom before label
        after_label: 'Со скинали' // Set a custom after label
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_active');
    })
    
    /* Настройка select */
    $('.select_checked').on('click', function() {
        $('.select__dropdown').toggleClass('select__dropdown_open'); 
    });
    $('.select__option').on('click', function() {
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open'); 
    });
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top -120 + "px"});
        return false;
    });
    $("input[type='tel']").mask("+7 (999) 999-99-99");
    /* Показывать карту только тогда, когда докрутили до нее */
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.130387289754!2d30.46479678758415!3d50.45102989500899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc73ace0bff29ff16!2sSmart%20Plaza%20Polytech!5e0!3m2!1sru!2sua!4v1591943340578!5m2!1sru!2sua" width="100%" height="410" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
            $(window).unbind('scroll');
        }
    });
});