const menuMobileBtn = document.querySelector(".menu-mobile__btn");
const headerNavMenuMobile = document.querySelector(".header-nav-menu-mobile");
menuMobileBtn.addEventListener("click", () => {
headerNavMenuMobile.classList.toggle("menu--open");
});

const menuMobileTableBtn = document.querySelector(".menu-mobile-table__btn");
const headerNavMenuMobileTable = document.querySelector(".header-nav-menu-mobile-table");
menuMobileTableBtn.addEventListener("click", () => {
headerNavMenuMobileTable.classList.toggle("menu--open");
});

const menuMobileSofaBtn = document.querySelector(".menu-mobile-sofa__btn");
const headerNavMenuMobileSofa = document.querySelector(".header-nav-menu-mobile-sofa");
menuMobileSofaBtn.addEventListener("click", () => {
headerNavMenuMobileSofa.classList.toggle("menu--open");
});

$(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="images/left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 830,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".product-one__tabs .tab").on("click", function (event) {
    var id = $(this).attr("data-id");
    $(".product-one__tabs").find(".tab-item").removeClass("active-tab").hide();
    $(".product-one__tabs .tabs").find(".tab").removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });

  $(".home-page__wrapper").slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="product-home-right"></button>',
    nextArrow: '<button type="button" class="product-home-left"></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".trend__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="trend-prev"></button>',
    nextArrow: '<button type="button" class="trend-next"></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".trend-safe").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "trend-dots",
    arrows: false,
  });

  $(".sample__slider").slick({
    arrows: false,
    dots: true,
    dotsClass: "sample-dots",
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".model__slider").slick({
    arrows: false,
    dots: true,
    dotsClass: "model-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".artist__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="artist__right"></button>',
    nextArrow: '<button type="button" class="artist__left"></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  var swiper = new Swiper(".blog-artist swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination blog-artist",
      type: "progressbar",
    },
    breakpoints: {
      450: {
        slidesPerView: 1.5,
        loop: false,
        passiveListeners: false,
      },
      800: {
        slidesPerView: 3,
        loop: true,
        passiveListeners: true,
      },
    },
  });

  $(".blog-new").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="picture-prev"></button>',
    nextArrow: '<button type="button" class="picture-next"></button>',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      450: {
        slidesPerView: 1.5,
        loop: false,
        passiveListeners: false,
      },
      800: {
        slidesPerView: 2.5,
        loop: true,
        passiveListeners: true,
      },
    },
  });
});
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
