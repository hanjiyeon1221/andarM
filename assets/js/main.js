/* ---swiper--- */
// 최상단 배너
const MainTopSwiper = new Swiper('.top-banner', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// 메인 비주얼 슬라이드
const MainVisual = new Swiper('.sc-visual .swiper', {
    effect: 'fade',
    loop: true,
    pagination: {
        el: '.pagination',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// BEST 탭
const bestTab = new Swiper('.sc-best .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
});

//  멤버십쿠폰 배너
const couponSwiper = new Swiper('.sc-coupon .swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.pagination',
        type: 'fraction',
    },
});

//  고객맞춤추천 슬라이드
const caterSwiper = new Swiper('.sc-cater .swiper', {
    pagination: {
        el: '.pagination',
    },
});

// 카테고리별 상품 슬라이드
const cateSwiper = new Swiper('.sc-cate .swiper', {
    slidesPerView: 2.1,
    spaceBetween: 10,
    freeMode: true,
});

/* ---contents--- */
let lastscroll = 0;
$(window).scroll(function () {
    const current = $(this).scrollTop();

    // 헤더스크롤 fixed
    if (current > 0) {
        $('.header').addClass('on');
    } else {
        $('.header').removeClass('on');
    }

    // quicktop
    if (current == 0) {
        $('.quicktop').removeClass('on');
    } else if (current < lastscroll) {
        $('.quicktop').addClass('on');
    } else {
        $('.quicktop').removeClass('on');
    }
    lastscroll = current;
});

// 헤더 서브메뉴
$('.header .menu-toggle').click(function () {
    $('.header .group-menu').toggleClass('on');
});

// 확장메뉴
$('.btn-gnb').click(function () {
    $('.gnb').addClass('on');
    $('body').addClass('hidden');
});
$('.gnb .btn-close').click(function () {
    $('.gnb').removeClass('on');
    $('body').removeClass('hidden');
});
// --- dimmed클릭시 닫기
$(document).click(function (e) {
    //console.log(e.target); //body
    if ($('.wrapper').has(e.target).length === 0) {
        $('.gnb').removeClass('on');
        $('body').removeClass('hidden');
    }
});

// 확장메뉴 -> 서브메뉴
$('.gnb .subnav').click(function () {
    $(this).siblings('.sub-list').slideToggle();
});

// 검색창
$('.btn-search').click(function () {
    $('.search-pop').addClass('on');
});
$('.search-pop .btn-close').click(function () {
    $('.search-pop').removeClass('on');
});

// best탭
$('.sc-best .tab-item').click(function (e) {
    e.preventDefault();
    tabName = $(this).data('tab');

    $(this).addClass('on').siblings().removeClass('on');
    $(tabName).addClass('on').siblings().removeClass('on');
});
