var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = 1;
} else {
    isMobile = 0;
}

$(function () {
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '50%',
        splashVPos: '50%',
        autoClose: true
    }, function () {
    });

    $(window).scroll(function () {
        var sx = $(window).scrollTop();
        var ah1 = $('#a01').offset().top - 200;
        var ah2 = $('#a02').offset().top - 200;
        var ah3 = $('#a03').offset().top - 200;
        var ah4 = $('#a04').offset().top - 200;
        var ah5 = $('#a05').offset().top - 300;
        var ah6 = $('#a06').offset().top - 300;
        var ah7 = $('#a07').offset().top - 300;
        if (sx >= ah1 && sx < ah2) {
            ACTION(1);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(1) a").addClass('act');
        } else if (sx >= ah2 && sx < ah3) {
            ACTION(2);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(2) a").addClass('act');
        } else if (sx >= ah3 && sx < ah4) {
            ACTION(3);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(3) a").addClass('act');
        } else if (sx >= ah4 && sx < ah5) {
            ACTION(4);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(4) a").addClass('act');
        } else if (sx >= ah5 && sx < ah6) {
            ACTION(5);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(5) a").addClass('act');
        } else if (sx >= ah6 && sx < ah7) {
            ACTION(6);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(6) a").addClass('act');
        } else if (sx >= ah7) {
            ACTION(7);
            $(".b_m li a").removeClass('act');
            $(".b_m li:nth-of-type(7) a").addClass('act');
        }
    })
    GOTOP();
    MENU();
    ACTION();
    MM();

    $(".hb a").click(function () {
        $(".hb a").toggleClass("change");
        // $(".m_m").slideToggle("slow");
        $(".m_m").stop(true, false).animate({opacity: "toggle"}, 300);
    });


    // var swiper = new Swiper('.swiper-container', {
    // 	loop: true,
    // 	pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //        	},
    //      	},
    //      	autoplay: {
    //     			delay: 7000,
    //     			disableOnInteraction: false,
    //   		}
    // });
});

function GOTOP() {
    $('.gotop,.logo').on("click", function () {
        $('html,body').animate({scrollTop: 0}, 800);
    });
    $(window).scroll(function () {
        var Y = $(window).scrollTop();
        if (Y > 800) {
            $(".gotop").stop(true, false).animate({bottom: 3 + "%", opacity: 1}, 800);
        } else {
            $(".gotop").stop(true, false).animate({bottom: 0, opacity: 0}, 800);
        }
    });
}


function MENU() {
    $(".b_m li:nth-of-type(1) a").on("click", function () {
        ACTION(1);
        $('html,body').stop().animate({scrollTop: $("#a01").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
    $(".b_m li:nth-of-type(2) a").on("click", function () {
        ACTION(2);
        $('html,body').stop().animate({scrollTop: $("#a02").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
    $(".b_m li:nth-of-type(3) a").on("click", function () {
        ACTION(3);
        $('html,body').stop().animate({scrollTop: $("#a03").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
    $(".b_m li:nth-of-type(4) a").on("click", function () {
        ACTION(4);
        $('html,body').stop().animate({scrollTop: $("#a04").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
    $(".b_m li:nth-of-type(5) a,.box a").on("click", function () {
        ACTION(5);
        $('html,body').stop().animate({scrollTop: $("#a05").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
    $(".b_m li:nth-of-type(6) a").on("click", function () {
        ACTION(6);
        $('html,body').stop().animate({scrollTop: $("#a06").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
    $(".b_m li:nth-of-type(7) a").on("click", function () {
        ACTION(7);
        $('html,body').stop().animate({scrollTop: $("#a07").offset().top}, 800);
        $(".b_m li a").removeClass('act');
        $(this).addClass('act');
        return false;
    });
}

function MM() {
    $(".m_m ul li:nth-of-type(1) a").on("click", function () {
        ACTION(1);
        $('html,body').stop().animate({scrollTop: $("#a01").offset().top}, 800);
        return false;
    });
    $(".m_m ul li:nth-of-type(2) a").on("click", function () {
        ACTION(2);
        $('html,body').stop().animate({scrollTop: $("#a02").offset().top}, 800);
        return false;
    });
    $(".m_m ul li:nth-of-type(3) a").on("click", function () {
        ACTION(3);
        $('html,body').stop().animate({scrollTop: $("#a03").offset().top}, 800);
        return false;
    });
    $(".m_m ul li:nth-of-type(4) a").on("click", function () {
        ACTION(4);
        $('html,body').stop().animate({scrollTop: $("#a04").offset().top}, 800);
        return false;
    });
    $(".m_m ul li:nth-of-type(5) a").on("click", function () {
        ACTION(5);
        $('html,body').stop().animate({scrollTop: $("#a05").offset().top}, 800);
        return false;
    });
    $(".m_m ul li:nth-of-type(6) a").on("click", function () {
        ACTION(6);
        $('html,body').stop().animate({scrollTop: $("#a06").offset().top}, 800);
        return false;
    });
    $(".m_m ul li:nth-of-type(7) a").on("click", function () {
        ACTION(7);
        $('html,body').stop().animate({scrollTop: $("#a07").offset().top}, 800);
        return false;
    });
}

function ACTION(num) {
    switch (num) {
        case 1:
            $("#b01").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
        case 2:
            $("#b02").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
        case 3:
            $("#b03").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
        case 4:
            $("#b04").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
        case 5:
            $("#b05").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
        case 6:
            $("#b06").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
        case 7:
            $("#b07").stop().delay(400).animate({opacity: 1, paddingTop: 0}, 300);
            break;
    }

}

$(window).load(function() {
    // open Client Stories modal
    $('.modal_container').hide()
    $('.backdrop').hide()

    $('.client_pic').click(function(event) {
        let $target = $(event.target) // img.test_img
        let $parent = $target.parent().parent().parent() // client_info

        $parent.find('.modal_container').show()
        $parent.parent().find('.backdrop').show()
    })

    $('.client_info .btn').click(function(event) {
        let $target = $(event.target) // div.btn
        let $parent = $target.parent().parent() // client_info

        $parent.find('.modal_container').show()
        $parent.parent().find('.backdrop').show()
    })
    
    $('.backdrop').click(function() {
        $('.modal_container').hide()
        $('.backdrop').hide()
    })

    $('.close_btn').click(function() {
        $('.modal_container').hide()
        $('.backdrop').hide()
    })

    // hide client story modal when clicking navbar
    // TODO add if-else
    $('.menu .b_m li a').click(function() {
        $('.modal_container').hide()
        $('.backdrop').hide()
    })

    // Switch Language dropdown - click
    $('.sub_menu').hide()
    $('.language_dropdown').click(function() {
        $('.sub_menu').show()
    }).mouseleave(function() {
        $('.sub_menu').hide()
    })
    // $('.sub_menu').hide()
    // $('.language_dropdown').click(function() {
    //     $('.sub_menu').toggle()
    // })
})
