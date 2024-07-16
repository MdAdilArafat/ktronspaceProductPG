
function change(){
    var nav = document.getElementById("navbar1")
    var col1 = document.querySelectorAll(".col1 ")
    console.log(col1)
    var scroll1 = window.scrollY;
    if(scroll1 < 7){
        nav.classList.remove("change-bg");
        for(i=0;i<col1.length;i++){
            col1[i].classList.remove("change-col"); 
        }
        console.log(col1)
    }
    else{
        nav.classList.add("change-bg"); 
        for(i=0;i<col1.length;i++){
        col1[i].classList.add("change-col"); 
    }
    }
 }
document.addEventListener('scroll', change);



//   Jquery code for imageZoomAnimation  starts

$(document).ready(function() {

    $('.slideshow-thumbnails').click(function() { changeSlide($(this)); });
  
    $(document).mousemove(function(e) {
      var x = e.clientX; var y = e.clientY;
      
    //   var x = e.clientX; var y = e.clientY;
  
      var imgx1 = $('.slideshow-items.active').offset().left;
      var imgx2 = $('.slideshow-items.active').outerWidth() + imgx1;
      var imgy1 = $('.slideshow-items.active').offset().top;
      var imgy2 = $('.slideshow-items.active').outerHeight() + imgy1;
  
      if ( x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2 ) {
        $('#lens').show(); $('#result').show();
        imageZoom( $('.slideshow-items.active'), $('#result'), $('#lens') );
      } else {
        $('#lens').hide(); $('#result').hide();
      }
  
    });
    
  });
  
  function imageZoom( img, result, lens ) {
  
    result.width( img.innerWidth() ); result.height( img.innerHeight() );
    lens.width( img.innerWidth() / 2 ); lens.height( img.innerHeight() / 2 );
  
    result.offset({ top: img.offset().top, left: img.offset().left + img.outerWidth() + 10 });
  
    var cx = img.innerWidth() / lens.innerWidth(); var cy = img.innerHeight() / lens.innerHeight();
  
    result.css('backgroundImage', 'url(' + img.attr('src') + ')');
    result.css('backgroundSize', img.width() * cx + 'px ' + img.height() * cy + 'px');
  
    lens.mousemove(function(e) { moveLens(e); });
    img.mousemove(function(e) { moveLens(e); });
    lens.on('touchmove', function() { moveLens(); })
    img.on('touchmove', function() { moveLens(); })
  
    function moveLens(e) {
      var x = e.clientX - lens.outerWidth() / 2;
      var y = e.clientY - lens.outerHeight() / 2;
      if ( x > img.outerWidth() + img.offset().left - lens.outerWidth() ) { x = img.outerWidth() + img.offset().left - lens.outerWidth(); }
      if ( x < img.offset().left ) { x = img.offset().left; }
      if ( y > img.outerHeight() + img.offset().top - lens.outerHeight() ) { y = img.outerHeight() + img.offset().top - lens.outerHeight(); }
      if ( y < img.offset().top ) { y = img.offset().top; }
      lens.offset({ top: y, left: x });
      result.css('backgroundPosition', '-' + ( x - img.offset().left ) * cx  + 'px -' + ( y - img.offset().top ) * cy + 'px');
    }
  }
  
  
  function changeSlide(elm) {
    $('.slideshow-items').removeClass('active');
    $('.slideshow-items').eq( elm.index() ).addClass('active');
    $('.slideshow-thumbnails').removeClass('active');
    $('.slideshow-thumbnails').eq( elm.index() ).addClass('active');
  }

  //   Jquery code for imageZoomAnimation  ends