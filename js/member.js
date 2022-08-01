$(document).on('ready',function(){

    $(".center").slick({

        dots: false,
        infinite: false,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,

            }
        },{
            breakpoint: 300,
            settings: "unslick"
        
        }]

    });
});