



 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();
			var targetOffset = 840;
			$('html,body').animate({
				scrollTop: targetOffset
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	// $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

const translations = {
    ko: {
        name: '홍송의',
        rotateTexts: ['게임 프로그래머' , '언리얼 개발자'],
		about: 'About Me',
		resume: '이력서 다운로드',
		pr: '끝없는 도전과 배움을 통해 더 재밌는 게임을 만들고자 노력하는 개발자입니다.',
		address_title : 'Address',
		pr_address: '경기도 화성시 기산동',
		date : '프로그래밍한 일 수',
		university_name : "공주대학교",
		major_name:"컴퓨터 공학",
		University_content: "4년 간 프로그래밍에 관한 지식을 쌓고 프로젝트를 수행하며 성장하였습니다.",
		name2 : "KGCA 게임 아카데미",
		procedure: "게임 프로그래머 과정",
		content2 : "게임 수학과 DirectX, Unreal Engine을 배우며 프로젝트를 통해 게임 프로그래머로서 성장하였습니다.",
		projects_content: "여러가지 프로젝트를 진행하며, 게임 프로그래머로서 성장해왔습니다.",
		game_name1: "타워 디펜스 게임",
		game_name2: "록맨 X5(모작)",
		game_name4: "몬스터 헌터 월드(모작)",
		game_stack1 : "기술 스택 : ",
		game_stack2 : "기술 스택 : ",
		game_stack3 : "기술 스택 : ",
		game_stack4 : "기술 스택 : ",
		game_stack5 : "기술 스택 : ",
		game_project1 : "개인 프로젝트",
		game_project2 : "개인 프로젝트",
		game_project3 : "개인 프로젝트",
		game_project4 : "팀 프로젝트",
		game_project5 : "팀 프로젝트",
		game_content1 : "몬스터들이 용의 알을 훔치기 위해 쳐들어왔다! 용의 알은 7일 후면 부화하게 되며, 그때까지 적의 공격을 막아야 한다. 다양한 용과 조합을 활용해 적의 공격을 방어하고, 용의 알을 안전하게 지켜내어 부화시켜라! ",
		game_content2 : "이 게임은 메가맨X5의 다이나모와의 전투를 재현한 작품으로, 원작의 다이나믹한 전투 스타일과 공격 패턴을 충실히 재현했습니다. 플레이어는 긴장감 넘치는 보스 전투를 경험할 수 있습니다.",
		game_content3 : "이 게임은 언리얼 엔진을 사용하여 블루프린트만으로 제작된 전투 게임입니다. 플레이어는 파일럿이 되어 적의 미사일을 피하고, 적을 격퇴하며 전투를 수행합니다. 목표는 임무를 완수하고 무사히 항공모함으로 귀환하는 것입니다.",
		game_content4 : "몬스터 헌터 월드 중 '리오레우스' 몬스터와의 전투를 재현한 게임",
		game_content5 : "슈팅 기반의 배틀로얄 게임으로 로그라이크 요소를 결합하여 만든 게임",

		together: '함께할 <span>회사를 찾는 중</span> 입니다.',
		call_me : "연락주세요.",
		contect_me : "회사와 함께 성장하는 개발자가 되겠습니다. 연락주세요.",
		address_tr : "경기도 화성시 기산동",

    },
    jp: {
        name: 'ホン  ソンイ',
        rotateTexts: ['ゲームプログラマー', 'アンリアル開発者'],
		about: '私について',
		resume: '履歴書のダウンロード',
		pr:'果てしない挑戦と学びを通じて、より楽しいゲームを作ろうと努力する開発者です。',
		address_title : 'Nationality',
		pr_address: '韓国',
		date: 'プログラミングした日数',
		university_name:"国立公州(KongJu)大学校",
		major_name: "コンピューター工学",
		University_content: "4年間プログラミングに関する知識を積み、プロジェクトを遂行しながら成長しました。",
		name2 : "KGCAゲームアカデミー",
		procedure: "ゲームプログラマーの過程",
		content2:"ゲーム数学とDirectX、Unreal Engineを学び、プロジェクトを通じてゲームプログラマーとして成長しました。",
		projects_content : "様々プロジェクトを通して、ゲームプログラマーとして成長しました。",
		game_name1: "タワーディフェンスゲーム",
		game_name2: "ロックマンX5(模作)",
		game_name4: "モンスターハンターワールド(模作)",
		game_stack1 : "技術スタック : ",
		game_stack2 : "技術スタック : ",
		game_stack3 : "技術スタック : ",
		game_stack4 : "技術スタック : ",
		game_stack5 : "技術スタック : ",
		game_project1 : "個人プロジェクト",
		game_project2 : "個人プロジェクト",
		game_project3 : "個人プロジェクト",
		game_project4 : "チームプロジェクト",
		game_project5 : "チームプロジェクト",

		game_content1 : "モンスターたちが竜の卵を盗むために打ち込んできました！ 竜の卵は7日後には孵化し、それまで敵の攻撃を防がなければなりません。 様々な龍と組み合わせで敵の攻撃を防御し、龍の卵を安全に守り孵化させましょう！",
		game_content2 : "このゲームはロックマンX5のダイナモとの戦闘を再現した作品で、原作のダイナミックな戦闘スタイルと攻撃パターンを忠実に再現しました。 プレイヤーは緊張感あふれる戦闘を体験できます。",
		game_content3 : "このゲームはアンリアルエンジンを使用してブループリントのみで製作された戦闘ゲームです。 プレイヤーはパイロットになり、敵のミサイルを避け、敵を撃退して戦闘を行います。 目標は任務を果たし、無事に空母に帰還することです。",
		game_content4 : "モンスターハンターワールドの中で「リオレウス」というモンスターとの戦闘を再現したゲーム",
		game_content5 : "シューティングベースのバトルロイヤルゲームで、ローグライク要素を組み合わせて作ったゲーム",

		together: '一緒に歩く<span>会社を探して</span>います。',
		call_me : "ご連絡ください。",
		contect_me : "会社と共に成長する開発者になります。 連絡お待ちしています。",
		address_tr: "Gyeonggi-do, Hwaseong-si"
    }
};
const languageSelector = document.getElementById('language-selector');

function changeLanguage(language) {
    document.getElementById('name').textContent = translations[language].name;
	document.getElementById("pr_name").textContent = translations[language].name
	document.getElementById("about").textContent = translations[language].about
	document.getElementById("resume").textContent = translations[language].resume
	document.getElementById("pr").textContent = translations[language].pr
	document.getElementById("address_title").textContent = translations[language].address_title
	document.getElementById("pr_address").textContent = translations[language].pr_address
	document.getElementById("program_date").textContent = translations[language].date
	document.getElementById("university_name").textContent = translations[language].university_name
	document.getElementById("major_name").textContent = translations[language].major_name
	document.getElementById("University_content").textContent = translations[language].University_content
	document.getElementById("name2").textContent = translations[language].name2
	document.getElementById("procedure").textContent = translations[language].procedure
	document.getElementById("content2").textContent = translations[language].content2
	document.getElementById("projects_content").textContent = translations[language].projects_content

	document.getElementById("game_name1").textContent = translations[language].game_name1
	document.getElementById("game_name2").textContent = translations[language].game_name2
	document.getElementById("game_name4").textContent = translations[language].game_name4
	document.getElementById("game_stack1").textContent = translations[language].game_stack1
	document.getElementById("game_stack2").textContent = translations[language].game_stack2
	document.getElementById("game_stack3").textContent = translations[language].game_stack3
	document.getElementById("game_stack4").textContent = translations[language].game_stack4
	document.getElementById("game_stack5").textContent = translations[language].game_stack5

	document.getElementById("game_project1").textContent = translations[language].game_project1
	document.getElementById("game_project2").textContent = translations[language].game_project2
	document.getElementById("game_project3").textContent = translations[language].game_project3
	document.getElementById("game_project4").textContent = translations[language].game_project4
	document.getElementById("game_project5").textContent = translations[language].game_project5

	document.getElementById("game_content1").textContent = translations[language].game_content1
	document.getElementById("game_content2").textContent = translations[language].game_content2
	document.getElementById("game_content3").textContent = translations[language].game_content3
	document.getElementById("game_content4").textContent = translations[language].game_content4
	document.getElementById("game_content5").textContent = translations[language].game_content5

	document.getElementById("address_tr").textContent = translations[language].address_tr

	document.getElementById('together').innerHTML = translations[language].together;
	
	const callMeElement = document.getElementById('call_me');
	const href = callMeElement.querySelector('a').getAttribute('href');  
	callMeElement.innerHTML = `<a href="${href}" class="btn btn-primary py-3 px-5">${translations[language].call_me}</a>`;

	document.getElementById("contect_me").textContent = translations[language].contect_me


	const  rotateElement = document.getElementById('subtitle');
    rotateElement.setAttribute('data-rotate', JSON.stringify(translations[language].rotateTexts));
	resetTxtRotate(rotateElement);
	initTextRotate(rotateElement);
}

function resetTxtRotate(rotateElement) {
    // 기존의 텍스트를 지우기
    rotateElement.innerHTML = '';

    // 새로운 랩 요소를 추가
    const wrap = document.createElement('span');
    wrap.className = 'wrap';
    rotateElement.appendChild(wrap);
}
function initTextRotate(rotateElement) {
	var toRotate = rotateElement.getAttribute('data-rotate');
    var period = rotateElement.getAttribute('data-period');
    
    if (toRotate)
	{
        new TxtRotate(rotateElement.querySelector('.wrap'), JSON.parse(toRotate), period);
    }
}
window.onload = function() {
	changeLanguage(languageSelector.value || 'ko');
	//initTextRotate();

  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

languageSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
});



})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $('#navi a');
  
  $navbara.click(function(e){
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
},500);
    hash($(this).attr('href'));
  });
  
  
  
  //select all the anchors in the navbar one after another
  $navbara.each(function(){
   // and adds them in the sections variable
    sections.push($($(this).attr('href')));
    
  })
  $(window).scroll(function(e){
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
    //cycle through the values in sections array
    for (var i in sections) {
      var section = sections[i];
      //if scrollTop variable is bigger than the top offset of a section in the sections array then 
      if (scrollTop > section.offset().top){
        var scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current'); 
    }
  })
})(jQuery);

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}


$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

