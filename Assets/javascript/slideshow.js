$(document).ready(function() {
  $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().fadeOut(1000);
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn(1000);
  }); 
  $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut(100);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1000);
  }); 

  var currentImage = 1;
  var totalImages = 5;

  function increaseImage() {
   
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
  
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
});