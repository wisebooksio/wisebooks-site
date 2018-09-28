// init Isotope

var $grid = $('.innerpeople').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
  });
});
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.button-group a.button').on('click', function(){
      $('.button-group a.button').removeClass('active');
      $(this).addClass('active');
  });
