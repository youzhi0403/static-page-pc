var swiper_init = {
    init:function () {
        //初始化
        swiper_init.swiperFn_12();
    },
    swiperFn_12:function () {
        var swiper = new Swiper('.swiper-container-2', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    },
}
swiper_init.init();
