$(document).ready(function(){
  // console.log($().jquery);
  var $banner = {
     containerBanner: $('#banner'),
     slides: $('#banner').children('.slide'),
     numberSlides: $('#banner').children('.slide').length,
     position :1
  };

  // for the slider with the Info
  var $info = {
    containerInfo : $('#info'),
    slides: $('#info').children('.slide'),
    numberSlides: $('#banner').children('.slide').length,
    position: 1
  };

  console.log($banner.slides[0], 'here');
  console.log($banner.containerBanner);
  console.log($banner.numberSlides);



  // to show the 1st slide in the div
  $banner.slides.first().css({
      'left': 0
  });
  $info.slides.first().css({
    'left': 0
  });


  // to resize the size of the img
  var heightBanner = function () {
    var height = $banner.slides.outerHeight();

    $banner.containerBanner.css({
      'height': height + 'px'
    });
    console.log(height);

  };

  // to resize the size of the 2nd slider-banner

    var heightInfo = function () {
      var height = $info.containerInfo.children('.active').outerHeight();

      $info.containerInfo.animate({
        'height': height + 'px'
      });
    };


    heightBanner();
    heightInfo();



  //when the window change the size:
  $(window).resize(function () {
    heightBanner();
    heightInfo();

  });

  // for the dots
  // to add one dot for each info slider-info
  $('#info').children('.slide').each(function () {
    $('#dots').append('<span>');
  });
  //to add the colour to the 1 st dot
  $('#dots').find('span').first().addClass('active');

// ---------------------------------------
// ----- Banner
// ---------------------------------------

	// Button Next

  $('#banner-next').click( function (e){
    e.preventDefault(); // not to add # in the url when clicking the arrow

    //console.log('testing click');
    if($banner.position < $banner.numberSlides) {
      console.log('testing if click');

      //to put images with out the class active on the right side of the slider
      $banner.containerBanner.children().not('.active').css({
        'left': '100%'
      });

      //to change the class in the images so the new image can go
      $('#banner .active').removeClass('active').next().addClass('active').animate({
        'left': '0'
      });
      //to move the actual image as well now both images move at the same time
      $('#banner .active').prev().animate({
        'left': '-100%'

      });

      $banner.position ++;

    } else {
      // to move the last image
      $('#banner .active').animate({
        'left': '-100%'
      });

      //to put images with out the class active on the right side of the slider
      $banner.containerBanner.children().not('.active').css({
        'left': '100%'
      });

      // to start again from the 1st image: 1 we add the active class to the 1st img and re-start position
      $('#banner .active').removeClass('active');
      $banner.slides.first().addClass('active').animate({
        'left': '0'
      });
      $banner.position = 1;
      console.log('testing else click');
    }
  });// End Button Next

  //----------
  // Button Previous

  $('#banner-prev').click(function (e){
    // to remove the # from the url
    e.preventDefault();

    if($banner.position > 1){

      // to put images on the left hand side of the slider
      $banner.containerBanner.children().not('.active').css({
        'left': '-100%'
      });

      //to move the actual image as well now both images move at the same time
      $('#banner .active').animate({
        'left': '100%'
      });


      // to move the slider
      $('#banner .active').removeClass('active').prev().addClass('active').animate({
        'left': '0'
      });

      // re-star the position
      $banner.position --;

    } else {

      // to put the images on the right hand side of the slider
      $banner.containerBanner.children().not('.active').css({
        'left': '-100%'
      });

      // to move from to the right the active image
      $('#banner .active').animate({
        'left': '100%'
      });

      // to pass the class active from the 1st image to the last img
      $('#banner .active').removeClass('active');
      $banner.containerBanner.children().last().addClass('active').animate({
        'left': '0'
      });
      // to change the position
      $banner.position =$banner.numberSlides;
    }
  }); // end click function


  // ---------------------------------------
  // ----- Slider Info
  // ---------------------------------------


  // Button Next

  $('#info-next').click(function (e) {

    // not to add # in the url when clicking the arrow
    e.preventDefault();


    if($info.position < $info.numberSlides){



      //to put images with out the class active on the right side of the slider
      $info.containerInfo.children().not('.active').css({
        'left': '100%'
      });

      //to change the class in the images so the new image can go
      $('#info .active').removeClass('active').next().addClass('active').animate({
        'left': 0
      });

      //to move the actual image as well now both images move at the same time
      $('#info .active').prev().animate({
        'left': '-100%'
      });
      // to change the colour of the dots
      $('#dots').find('.active').removeClass('active').next().addClass('active');
      $info.position ++;

    } else{

      // to move the last image
      $('#info .active').animate({
        'left': '-100%'
      });

      //to put images with out the class active on the right side of the slider
      $info.containerInfo.children().not('.active').css({
        'left': '100%'
      });

      // to start again from the 1st image: 1 we add the active class to the 1st img and re-start position
      $('#info .active').removeClass('active');
      $info.slides.first().addClass('active').animate({
        'left': '0'
      });

      // to change the colour of the dots
      $('#dots').find('.active').removeClass('active');
      $('#dots').find('span').first().addClass('active');


      $info.position = 1;
    }
    heightInfo();

  });// end click next


  // Button Previous

  $('#info-prev').click( function (e) {
    e.preventDefault();

    if($info.position > 1) {

      //to put images with out the class active on the left side of the slider
      $info.containerInfo.children().not('.active').css({
        'left': '-100%'
      });

      //to move the actual image as well now both images move at the same time
      $('#info .active').animate({
        'left': '100%'
      });

      //to move the slider
      $('#info .active').removeClass('active').prev().addClass('active').animate({
        'left': '0'
      });
      // to change the dots
      $('#dots').children('.active').removeClass('active').prev().addClass('active');


      // re-start the position
      $info.position --;

    } else{
      // to put the images on the right hand side of the slider
      $info.containerInfo.children().not('.active').css({
        'left': '-100%'
      });

      // to move from to the right the active image

      $('#info .active').animate({
        'left': '100%'
      });

      // to pass the class active from the 1st image to the last img
      $('#info .active').removeClass('active');
      $info.containerInfo.children().last().addClass('active').animate({
        'left': '0'
      });

      // to change dots
      $('#dots').find('.active').removeClass('active');
      $('#dots').find('span').last().addClass('active');

      //to change the position
      $info.position = $info.numberSlides;
    }
    heightInfo();

  });




}); // end document.ready
