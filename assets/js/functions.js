/* Bouton Menu toogle  */
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

//});

/* balayage fluide  */

$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function() {
    window.location.hash = target;
  });
});

/*Fixer le menu en haut de page  */
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.getElementById('menu-bar').style.position = 'fixed';
    document.getElementById('menu-bar').style.top = '0px';
  } else {
    document.getElementById('menu-bar').style.position = 'static';
  }
});
