$(document).ready(function () {
    $(".main__title").addClass('scroll-active');
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass("active");
        $("body").toggleClass('lock');
    });
    $(".header__link").each(function () {
        $(this).click(function () {
            $('.header__burger, .header__menu').toggleClass("active");
            $("body").toggleClass('lock');
        });
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.row-3__favor').css('opacity', "1");
        } if ($(this).scrollTop() > 150) {
            $(".row-4__item").addClass('row-4__item-active');
        } if ($(this).scrollTop() > 1200) {
            $('.cost__item').css('opacity', "1");
        } if ($(this).scrollTop() > 3500) {
            $('.why__item:nth-child(2),.why__item:nth-child(4)').css({ "align-self": "flex-end", "opacity": "1" });
        }
    });

    $(".form-start").each(function () {
        $(this).click(function () {
            $(".popup").addClass('popup-active');
            $("body").addClass('lock');
        });
    });
    $(".popup__close").click(function () {
        $(".popup").removeClass('popup-active');
        $("body").removeClass('lock');
    })

    $("form").submit(function () {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "sendform.php",
            data: form_data,
            success: function () {
                $(".popup").removeClass('popup-active');
                $("body").removeClass('lock');
            }
        });
        event.preventDefault();
    });

    $(function () {
        $("#phone").mask("8(999) 999-99-99");
    });
});
