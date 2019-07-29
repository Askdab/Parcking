
/*opacity for Orderbutton*/
var buttom = document.querySelector('.buttom');

buttom.addEventListener('mouseover', changeDefOver);
buttom.addEventListener('mouseout', changeDefOut);

/*$('.slidermenu li').onclick(function(){
	$('li').removeClass('active');
	&(this).addClass('active');
});*/


function changeDefOver(e) {
 this.style.opacity="1";
}

function changeDefOut(e) {
  this.style.opacity="0.7";
}


// map block
var SlideIndex =1;
	showSlides(SlideIndex);
    

function underparking(){
	showSlides(SlideIndex=1);
}

function nearthebuilding(){
	showSlides(SlideIndex=2);

}

function neartheSOK(){
	showSlides(SlideIndex=3);
}

function neartheKampus(){
	showSlides(SlideIndex=4);
}

function currentSlider(n){
	showSlides(SlideIndex=n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var list = document.getElementsByClassName("parkingMap");
  	
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list[i].style.color = "black";
    }
    slides[SlideIndex - 1].style.display = "block";
    list[SlideIndex - 1].style.color = "grey";
}



/*function initMap() {
    var coordinates = {lat: 61.001283, lng: 69.030192},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });
}
/*AIzaSyCxOG8ST8QvrQD63tLXOPU71iXcJsQPhU4*/
//modal window
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
    
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.opacity="1";
    }
}


// scroll element 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn2").style.display = "block";
  } else {
    document.getElementById("myBtn2").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
