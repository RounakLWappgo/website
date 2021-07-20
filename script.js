var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.countin').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

var counte = 0;
$(window).scroll(function() {

  var oTop = $('#count').offset().top - window.innerHeight;
  if (counte == 0 && $(window).scrollTop() > oTop) {
    $('.counting').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counte = 1;
  }

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
   $('.navb1').addClass('d-none');
   $('.navb2').removeClass('d-none')
   $('.navb').removeClass('container-fluid')
   $('#navb').addClass('container')
   $('#navbar').removeClass('bg-transparent')
   $('#navbar').addClass('bg-white')
   $('.nav-link').removeClass('text-white')
   $('#navbar').css({"height":"70px", "transition":"1s ease-in-out" })
   
  } 
  else {
      $('.navb').addClass('container-fluid')
      $('#navb').removeClass('container')
      $('.navb2').addClass('d-none');
      $('.navb1').removeClass('d-none')
      $('#navbar').removeClass('bg-white')
      $('#navbar').addClass('bg-transparent')
      $('.nav-link').addClass('text-white')
      $('#navbar').css({"height":"120px"})
  }
});