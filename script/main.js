// cqq _ 2017-9-30

var page = {
	init: function() {  //	初始化
		page.home_menu();
		page.scroTop();
		page.swiper();
		page.onClick();
		page.swiperFn_3();
		page.mobileClient();
		page.swtLeft();
		page.selectCoupon();
		// page.goodNum();
		page.checkbox();
	},
	swiperFn_3: function() {
		var swiper = new Swiper('.swiper-container-3', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 5,
	        paginationClickable: true,
	        spaceBetween: 13
	    });
	},
	swiperFn_4: function() {
		var swiper = new Swiper('.swiper-container-4', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 5,
	        paginationClickable: true,
	        spaceBetween: 13
	    });
	},
	swiperFn_5: function() {
		var swiper = new Swiper('.swiper-container-5', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 5,
	        paginationClickable: true,
	        spaceBetween: 13
	    });
	},
	swiperFn_6: function() {
		var swiper = new Swiper('.swiper-container-6', {
			pagination: '.swiper-pagination',
			loop: true,
			// autoplay : 3000,
			// direction : 'horizontal',

	    });
	},
	swiper: function() {
		var swiper = new Swiper('.swiper-container-1', {
	        // pagination: '.swiper-pagination',
	        paginationClickable: true,
			// spaceBetween: 30,
			direction : 'horizontal',
            pagination: '.swiper-pagination',
            speed : 500,
            // autoplay : 3000,
            autoplayDisableOnInteraction : false,
            loop : true,
	    });
	    var swiper = new Swiper('.swiper-container-2', {
	        // pagination: '.swiper-pagination',
	        // paginationClickable: true,
	        spaceBetween: 30,
    	});

	},
	scroTop: function() {
		$(window).scroll(function() {
			// var wh = $(window).height();
			var sTop = $(document).scrollTop();
			if(sTop > 600) {
				$('.top-search-hide').show();
			} else {
				$('.top-search-hide').hide();
			}
		});
	},
	home_menu: function() { // 全部商品分类鼠标移动切换内容
		$('.show-list').hover(function (){
			var content = $(this).find(".show-list-item").html();
			var _index = parseInt($(this).attr('data-index'));
			var _height = parseInt($('.menu-li').css('height'));

				switch(_index) {
					case 1:
						$(this).find(".show-list-item").css('top', "px");
					break;
					case 2:
						$(this).find(".show-list-item").css('top', -_height + "px");
					break;
					case 3:
						$(this).find(".show-list-item").css('top', -_height * 2 + "px");
					break;
					case 4:
						$(this).find(".show-list-item").css('top', -_height * 3 + "px");
					break;
					case 5:
						$(this).find(".show-list-item").css('top', -_height * 4 + "px");
					break;
					case 6:
						$(this).find(".show-list-item").css('top', -_height * 5 + "px");
					break;
					case 7:
						$(this).find(".show-list-item").css('top', -_height * 6 + "px");
					break;
					case 8:
						$(this).find(".show-list-item").css('top', -_height * 7 + "px");
					break;
					default:
				}

			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$(this).find('.show-list-item').show();
			$(this).siblings().find('.show-list-item').hide();
			$('.palm-speed').hide();

		}, function () {
			$(this).find('.show-list-item').hide();
			$(this).removeClass('active');
			$('.palm-speed').show();
		})
	},
	onClick: function() {

		//全部订单状态切换
		$('.order-type li').on('click', function() {
			$(this).addClass('active').siblings().removeClass('active');
		})
		//选择性别：
		$('.radio-change').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).find('.radio-show').removeClass('hide');
			$(this).siblings().find('.radio-show').addClass('hide');
			$(this).find('input').attr('checked','checked');
			$(this).siblings().find('input').attr('checked',false);
		});
		// 会员中心 菜单切换
		$(".nav-list li").on("click",function () {
        	$(this).addClass("active").siblings("[class~='active']").removeClass("active");
        	// var index = $(this).index();
	        // $($(".member-detail .detail-item")[index]).removeClass("hide").siblings().addClass("hide");
	      });
		// 加减计算
		$('.num').on('keyup', function() {
		    var o = $(this).val();
		    console.log(o);
		    var temp_amount = '';
		    if (/[^\d]/.test(o) ) { //替换非数字字符
		      	var temp_amount = o.replace(/[^\d]/g, '');
		    }else if (/^[0]*/g.test(o)) {
		      	var temp_amount = RegExp.rightContext;
		    }
		    $(this).val(temp_amount);
		});
		$('.add').on('click', function(){
			var _value = parseInt($(this).siblings('.quantity-input').find('.num').val());
			if (isNaN(_value)){
				$(this).siblings('.quantity-input').find('.num').val('1');
			} else {
				_value = _value + 1;
				$(this).siblings('.quantity-input').find('.num').val(_value);
			}
		});
		$('.min').on('click', function(){
			var _value = parseInt($(this).siblings('.quantity-input').find('.num').val());
			if( _value >1 ) {
				_value = _value - 1;
				$(this).siblings('.quantity-input').find('.num').val(_value);
			} else if(_value == 1) {
				$(this).siblings('.quantity-input').find('.num').val("1");
			} else if (isNaN(_value)) {
				$(this).siblings('.quantity-input').find('.num').val('1');
			}
		});

		$('.cart-del').on('click', function(){
			$(this).parent('.cart-item').remove();
		})
		$('.order-infor-item').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('.close-swt').on('click', function(){
			$('.swt-wrapper').hide();
		});
		$('.doc-ask-list').find('span').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			var _index = parseInt($(this).index());
			if(_index == 3) {
				$(this).removeClass('active');
				$(this).siblings().toggle();
				//箭头的切换 todo


			}
		});

		// 收藏
		$('.store-gooods').on('click', function(){
			if($(this).hasClass('active')){
				$(this).find('.store-goods-text').text('收藏该商品');
			}else{
                $(this).find('.store-goods-text').text('已收藏');
			}
			$(this).toggleClass('active');

		});
		$('.close-resart-icon').on('click', function(){
			$(this).parent('.all-resart-item').hide(200);
			$(this).parent('.all-resart-item').prev().hide();
		});

		$('.cang').on('click', function(){
			$(this).toggleClass('active');
		});

		$('.size-list').find('em').on('click', function(){
			$(this).hasClass('not-allow') ? $(this).addClass('not-allow') : $(this).addClass('active').siblings().removeClass('active');
		});

		$('.all-resart-list').on('click', function(){
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.all-resart-hide').hide();
			} else {
				$(this).addClass('active');
				$('.all-resart-hide').show();
			}
		});

		$('.pay-style-item').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			var _index = parseInt($(this).index());
			if(_index == 1 ) {
				$('.online-list').addClass('active');
			} else {
				$('.online-list').removeClass('active');
			}
		});
		$('.song-style').find('p').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('.pay-style-item2').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('.pay-style-item3').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});

		$('.help-menu-title').on('click', function() {
			$(this).toggleClass('active');
			$(this).next(".help-menu-list").toggle();
		});

		//套餐组合
		$('.swiper-container.swiper-tabs .swiper-slide').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			var _index = parseInt($(this).index());
			$('.efficacy-cont-item').removeClass('active');
			$('.efficacy-cont-item').eq(_index).addClass('active');
		});
		//todo

		//套餐组合二
		$('.tab-swiper-list').find('a').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			var _index = parseInt($(this).index());
			$('.tab-swiper-item').removeClass('active');
			$('.tab-swiper-item').eq(_index).addClass('active');
			switch(_index) {
				case 0:
					page.swiperFn_3();
				break;
				case 1:
					page.swiperFn_4();
				break;
				case 2:
					page.swiperFn_5();
				break;
				default:

			}
		});
		//商品说明评论
		$('.p-detail-tab').find('a').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
			var _index = parseInt($(this).index());
			$('.p-cont').removeClass('active');
			$('.p-cont').eq(_index).addClass('active');
		});
		//商品评论晒图
		$('.radio-btn').on('click', function(){
			$(this).parent('.radio-span').addClass('active');
			$(this).parent('.radio-span').siblings().removeClass('active');
		});

		$('.page-list').find('a').on('click', function(){
			$(this).addClass('active').siblings().removeClass('active');
		});

		$('.consult-text').on("focus", function(){
			$('.consult-cont').css('height','160px');
			$(this).css({"width":"780px",'height':'70px',"padding":"10px","margin-top":"10px"});
			$('.show-hide-icon').hide();
			$('.submit-consult').show();
		});
		$('.consult-text').on("blur", function(){
			$('.consult-cont').css('height','36px');
			$(this).css({"width":"740px",'height':'36px',"padding":"0 10px","margin-top":"0"});
			$('.show-hide-icon').show();
			$('.submit-consult').hide();
		});

		$('.recommend-list').on('click', function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			var index = parseInt($(this).attr('data-index'));
			switch(index) {
				case 1:
					$('.recommend-menu').css('borderColor',"#ea5252");
				break;
				case 2:
					$('.recommend-menu').css('borderColor',"#ed7033");
				break;
				case 3:
					$('.recommend-menu').css('borderColor',"#5eb14c");
				break;
				case 4:
					$('.recommend-menu').css('borderColor',"#3096f2");
				break;
			}
		});
		$('.showall').on('click', function() {
			if($('.show-content').hasClass('active')) {
				$('.like-care').animate({"margin-top":"466px"});
				$('.show-content').removeClass('active');
			} else {
				$('.like-care').animate({"margin-top":"15px"});
				$('.show-content').addClass('active');
			}
		});
		$('.home-menu-inner').find('a').on('click', function(){
			var index = parseInt($(this).attr('data-index'));
			var wt = $(this).width();
			// console.log(typeof wt);
			switch(index) {
				case 1:
					$('.hover-move').animate({left:"32px"});
				break;
				case 2:
					$('.hover-move').animate({left: 32 + wt + "px"});
				break;
				case 3:
					$('.hover-move').animate({left: 32 + wt * 2 + "px"});
				break;
				case 4:
					$('.hover-move').animate({left: 32 + wt * 3 + "px"});
				break;
				case 5:
					$('.hover-move').animate({left: 32 + wt * 4 + "px"});
				break;
				case 6:
					$('.hover-move').animate({left: 32 + wt * 5 + "px"});
				break;
				case 7:
					$('.hover-move').animate({left: 32 + wt * 6 + "px"});
				break;
				default:
			}
		});
	},
	mobileClient: function() {  //鼠标悬浮头部的手机客户端，显示内容
		$('.palm').hover(function () {
			$('.mobile-client').show()
		},function () {
			$('.mobile-client').hide()
		})
	},
	swtLeft: function () {  //设置首页左侧导航栏当屏幕滚动时的状态
		$(document).scroll(function () {
			var scrollVal =  $(this).scrollTop();
			if (scrollVal < 948) $('.new-guider-list a').removeClass('active');
			if (scrollVal > 948 && scrollVal < 1748) $('.new-guider-list a:eq(0)').addClass('active').siblings().removeClass('active');
			if (scrollVal > 1748 && scrollVal < 2548) $('.new-guider-list a:eq(1)').addClass('active').siblings().removeClass('active');
			if (scrollVal > 2548 && scrollVal < 3348) $('.new-guider-list a:eq(2)').addClass('active').siblings().removeClass('active');
			if (scrollVal > 3348 && scrollVal < 4148) $('.new-guider-list a:eq(3)').addClass('active').siblings().removeClass('active');
			if (scrollVal > 4148 && scrollVal < 4948) $('.new-guider-list a:eq(4)').addClass('active').siblings().removeClass('active');
			if (scrollVal > 4948 && scrollVal < 5748) $('.new-guider-list a:eq(5)').addClass('active').siblings().removeClass('active');
			if (scrollVal > 5748) $('.new-guider-list a:eq(6)').addClass('active').siblings().removeClass('active');
		});
	},
	selectCoupon: function () { //开启/关闭优惠卷弹框
		$('.select-coupon').click(function () {
			$('.popup').addClass('visible');
		});
		$('#close-popup').click(function () {
			$('.popup').removeClass('visible');
		});
	},
	/* goodNum: function () { //点击加减按钮改变数量
		$('#min').click(function () {
			var num = parseInt($('#good-num').val());
			if (num <= 1) return;
			else num !== num ? $('#good-num').val('1') : $('#good-num').val(num -= 1);
		});
		$('#max').click(function () {
			var num = parseInt($('#good-num').val());
			if (num <= 0) $('#good-num').val('1');
			else num !== num ? $('#good-num').val('1') : $('#good-num').val(num += 1);
		});
	}, */
	checkbox: function () { //checkbox点击改变状态
		$('.checked').click(function () {
			$(this).find('input').attr('checked') ? $(this).removeClass('active').find('input').attr('checked', false)
			: $(this).addClass('active').find('input').attr('checked', true);
		});
	}
}
page.init();




