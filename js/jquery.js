
$(function () {
  //화면 로드 시 MYJOB 부분은 펼쳐있고, MYJOB현황은 open2 스타일적용 
  // $('ul.step02').eq(0).show();
  $('li.step02 a').eq(0).addClass('open2');

  //첫번째 메뉴를 클릭하면 open 스타일 적용되게, open 스타일이 적용되어 있다면 그 하위메뉴 펼쳐지게
  $('li.step01 a').on("click", function () {
    $('li.step02 a').removeClass('open2');
    $(this).next().stop().slideToggle(150);
    $(this).parent('li.step01').siblings('li.step01').children('ul.step02').slideUp();
    $(this).toggleClass('open');
    $(this).parent('li.step01').siblings('li.step01').children('a').removeClass('open');
  })

  //두번째 메뉴를 클릭하면 open2 스타일 적용되고 그 하위메뉴 펼쳐지게
  $('li.step02 a').on("click", function () {
    $('li.step03 a').removeClass('open3');
    $('li.step02 a').eq(0).removeClass('open2');
    $(this).parent('li.step02').siblings('li.step02').children('ul.step03').slideUp(150);
    $(this).addClass('open2');
    $(this).parent('li.step02').siblings('li.step02').children('a').removeClass('open2');
  })

  //대메뉴 클릭
  $('.main-gnb > ul > li > a').on("click", function (e) {
    //대메뉴 클릭시 해당페이지에 아래선 선택자 적용
    e.preventDefault();
    $(this).parent('li').addClass('open');
    //this는 li태그이고 e.target은 span이나 그 상위요소인 a인데 
    //어찌됐든 e.target의 부모요소들 중에서 open클래스를 제거하는 코드이므로 정상적으로 동작
    $('.open').not($(e.target).parents()).removeClass('open');
    //대메뉴 클릭시 왼쪽 사이드 메뉴 하위메뉴 toggle
    let index = $(this).index();
    $('.side-menu > li > ul').eq(index).slideDown(150);
    $('.side-menu > li > ul').not($('.side-menu > li > ul').eq(index)).slideUp(150);
    $('.container').addClass('active');
    $('.side-menu > li > a').eq(index).addClass('open');
    $('.side-menu > li > a').not($('.side-menu > li > a').eq(index)).removeClass('open');
  })

  //slide-btn 클릭
  $('.slide-btn').on("click", function () {
    //slide-btn 클릭시 대메뉴 바탕색 제거
    $('.main-gnb > ul > li').removeClass('open');
    //slide-btn 클릭시 leftmenu 숨김처리
    $('.container').removeClass('active');
    $('.side-menu > li > a').removeClass('open');
    $('li.step02 a').removeClass('open2');
    $('li.step03 a').removeClass('open3');
  })
})