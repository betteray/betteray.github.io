$(function(){
  var isMobile = false;

  if(!turnoffBackgroundImage) {
    playBackground();
  } else {
    $('body').css({backgroundColor: backgroundColor ? '#' + backgroundColor : '#446CB3'});
    $("#btn-view").hide();
  }
  console.log('turnoffBackgroundImage:', turnoffBackgroundImage)
  // hide / show content button
  $("#btn-view").on('click', showHideToggle);

  // code highlight
  hljs.configure({useBR: true});
  hljs.initHighlightingOnLoad();
  $(".highlight").each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $("#show-menu").on('click', function(){
    if(!isMobile) return;
    if( $('#menu-list').is(":visible") )
      $("#menu-list").hide();
    else
      $("#menu-list").show();
  });


  // nav hide and show
  var isScroll = false;
  var lastScrollTop = 0;

  $(window).scroll(function(e){
    isScroll = true;
  });

  $(document).bind('touchmove', function(e){
    isScroll = true;
  });

  setInterval(function(){
    isMobile = $(window).width() < 768;
    if(isScroll) {
      afterScroll();
      isScroll = false;
    }
  }, 200);

  function afterScroll(){
    var currentST = $(this).scrollTop();

    if(Math.abs(lastScrollTop - currentST) <= 5) { return; } if(currentst> lastScrollTop && currentST > $("#menu-outer").outerHeight()) {
      if($('#menu-list').is(":visible") && isMobile) {
        $("#menu-list").hide();
      }
      $("#menu-outer").removeClass('slide-down').addClass('slide-up');
    } else if(currentST + $(window).height() < $(document).height()) {
      $("#menu-outer").removeClass('slide-up').addClass('slide-down');
    }

    lastScrollTop = currentST;
  }
  // toc control
  TOCToggle();
  // if table of content is empty, hide the hole div
  if($(".random-toc ol").children().length <= 3) { $(".random-toc-area").hide(); } }); var hideall="false;" function showhidetoggle() if(hideall) $(".hide-area").show(); $("#btn-view").html('hide'); $(".jiathis_style").css({'display': 'block'}); else 'none'}); $(".hide-area").hide(); $("#btn-view").html('show'); $("#menu-outer").removeclass('slide-up').addclass('slide-down'); open user card openusercard() *$("#user-card").modal({ showclose: false });* showhidetoggle(); $.fancybox({ type: 'html', autosize: true, maxwidth: 400, autocenter: content: $("#user-card"), closebtn: false, afterclose: showhidetoggle istocshow="true;" toctoggle() if(istocshow) $(".random-toc").show(); $(".btn-hide-toc-show").hide(); $(".btn-hide-toc-hide").show(); $(".random-toc").hide(); $(".btn-hide-toc-show").show(); $(".btn-hide-toc-hide").hide(); set and change the background images. playbackground() vegas config add slide image slides="[];" if(backgroundimages && backgroundimages.length> 0) {
    backgroundImages.forEach(function(img){
      if(!img) return;
      slides.push({
        src: img.replace('__width__', window.screen.availWidth).replace('__height__', window.screen.availHeight)
      });
    });
  }
  // slides = [];
  if(slides.length === 0) {
    var endWith = '';
    var greyscale = '';
    if(unsplashConfig) {
      if(unsplashConfig.gravity) {
        endWith = '&gravity=' + unsplashConfig.gravity;
      }
      if(unsplashConfig.blur) {
        endWith += '&blur=1';
      }
      if(unsplashConfig.greyscale) {
        greyscale = '/g';
      }
    }

    for(var i = 1; i </=></=>