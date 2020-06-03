function initMap() {
    var uluru = {lat: 43.445713, lng: -79.667266};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(document).ready(function() {

    $(document).on("scroll", onScroll);


    $("#contact-form").submit(function(e) {

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var message = document.getElementById('message');

        if (!name.value || !email.value || !phone.value || !message.value) {

            alertify.error('Please check your entries');
            e.preventDefault();
            $(this).reset();
        } else {
            $.ajax({
                url: "https://formspree.io/saranat2515@hotmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            alertify.success('Message sent');
            this.reset();
            e.preventDefault();
        }
    });


    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('navactive');
        })
        $(this).addClass('navactive');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('.nav li a').each(function() {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('ul.nav li a').removeClass("navactive");
            currentLink.addClass("navactive");
        } else {
            currentLink.removeClass("navactive");
        }
    });


    $(function() {
        $('#Container').mixItUp();
    });

    // $(function() {
    //     $("#datepicker").datepicker();
    // });




};