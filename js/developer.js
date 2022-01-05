$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.close-menu').click(function(){
        $('.toggle-menu').toggleClass('open');
        $('.menu').toggleClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.level-1').click(function(){
        $(this).toggleClass('open');
    })
    $('.open-popup-modal').click(function(){
        var popupID = $(this).data("target")
        var popupID = '#'+ popupID;
        $('.popup-modal').removeClass('show');
        $("body").removeClass("overflow-hide");
        $(popupID).addClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.valuation-form .btn').click(function(){
        var step = $(this).data("step");
        var tabPane = document.getElementsByClassName("tab-pane");

        

        alert(step);
    })
    $('.close-popup').click(function(){
        $(this).parents('.popup-modal').removeClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.review-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
      });
      $('.que-ans-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
         
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
         
          }
          
        ]
      });
      $('.love-clasiq').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
         
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false
            }
         
          }
          
        ]
      });
      $(".gallery .view-all-gallery").click(function(){
          $(this).addClass('d-none');
          $(".gallery-img-wrap").removeClass('d-none');
      })
      $(".gallery .hide-all-gallery").click(function(){
        $(".gallery .view-all-gallery").removeClass('d-none');
        $(".gallery-img-wrap").addClass('d-none');
      })
        $(".search-wrapper  .fa-search").click(function(){
            $(".mobile-search-input").toggleClass("show");
        })
    
    $(".toggle-sidebar").click(function(){
        $(".profile-options").toggleClass("open");
    })
});



$(window).scroll(function() {
    var scrollTop = $(window).scrollTop(),
        divOffset = $('.auction-car-bid-details').offset().top,
        dist = (divOffset - scrollTop);
    if (dist < 95) {
        $('.auction-car-bid-details').addClass("fixed-now");
    }
    else{ 
        $('.auction-car-bid-details').removeClass("fixed-now");
    }
})

function progress(timeleft, timetotal, $element) {
    var barWidth = $element.parent('.auction-bid-time,.auction-car-bid-details .container').width();
    var progressBarWidth =  timeleft * barWidth / timetotal;
    // var progressBarWidth = barWidth - progressBarWidth;
    $element.animate({ width: progressBarWidth}, 100);
    $element.parent().find('.time-left').html(timeleft);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
    else{
        $element.parent().find('.auction-time').html("Auction Completed");
    }
};
progress(120, 120, $('.time-slider'));