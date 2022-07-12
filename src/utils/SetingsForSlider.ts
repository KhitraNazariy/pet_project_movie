export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    adaptiveWidth: false,
    speed: 2000,
    autoplaySpeed: 4000,
    variableWidth: true,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};