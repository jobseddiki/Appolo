	  
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
  let target = this.hash;
  let $target = $(target);
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

/*slider */
//valeur aleatire pour le carrousel
function aleaEntreBornes(bMin, bMax) {
  //retourne un nombre aléatoire entre bmin et bmax inclusivement
  return bMin + Math.floor((bMax - bMin + 1) * Math.random());
}
/* atteindre le carrousel */

//denombrer les elements du caroussel
//var nItems = $('#carrousel > div.item').length;
//Nombre aléatoire ente 0 et 2
/*var startHere = aleaEntreBornes(0, nItems - 1);


function putJCycleCarrousel() {
    //faire le carrousel
    $("#carrousel").cycle({
        startingSlide: startHere,
        slides: "> div.item",
        fx: "fade",
        speed: 500,
        timeout: 0,
        next: "#carrousel > .next",
        prev: "#carrousel > .prev",
    });
}*/

/*carrousel test */

const carousel = document.querySelector('#carousel');
const carouselItems = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const items = document.querySelectorAll('.item');

let currentIndex = 0;
const slideWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight);
const maxIndex = items.length - 1;

function moveToSlide(index) {
  carouselItems.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }
  moveToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  moveToSlide(currentIndex);
});
