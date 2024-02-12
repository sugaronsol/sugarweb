$(document).ready(function() {
  (function(){
    var words = [
      'dank memes',
      'design mockups',
      'social content',
      'blogs &amp; themes',
      'eCommerce sites',
      'Open Source Software',
      'social media strategies',
      'Photoshops of stuff',
      'infographics &amp; charts',
      'guides &amp; tutorials',
      'product concepts',
      'logos &amp; branding assets',
      'original content',
      'real shit happen'
    ], i = 0;
    setInterval(function(){
      $('#changingword').fadeOut(function(){
          $(this).html(words[i=(i+1)%words.length]).fadeIn();
      });
    }, 6000);
  })();

  $("#logo h1").click(function(event) {
    event.preventDefault();
    $("#wrapper").toggleClass("moveOver");
    $(".closeable").toggleClass("active");
  });

  $(".network").hover(function() {
      var a = Math.random() * 10 - 5;
      $(this).css("transform", "rotate(" + a + "deg) scale(1.25)");
  }, function() {
      $(this).css("transform", "none");
  });

  $("#intro button").click(function() {
    $("#intro").addClass("hidden");
  });

  $("#intro .close").click(function() {
    $("#intro").addClass("hidden");
  });

  $("#intro input").on( 'keypress', function( event ) {
    if(event.which == 13) {
      $("#intro").addClass("hidden");
    }
  });
});