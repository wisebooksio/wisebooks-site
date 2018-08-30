// init Isotope
  var $grid = $('.innerpeople').isotope();

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
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
