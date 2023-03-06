import { Challenge } from "./components/Challenge";
document.addEventListener("DOMContentLoaded", () => {
    const challenge = new Challenge();
    $(document).ready(function () {
        challenge.renderInputs();
        $(".container-item-list").slick({
            dots: false,
            Infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-custom-arrow slick-prev"> < </button>',
            nextArrow: '<button type="button" class="slick-custom-arrow slick-next"> > </button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: "unslick",
                },
            ],
        });
    });

    $(window).resize(function () {
        $(".container-item-list").slick("unslick");
        challenge.renderInputs();
        $(".container-item-list").slick({
            dots: false,
            Infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-custom-arrow slick-prev"> < </button>',
            nextArrow: '<button type="button" class="slick-custom-arrow slick-next"> > </button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: "unslick",
                },
            ],
        });
    });
});
