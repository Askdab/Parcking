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
  	
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[SlideIndex - 1].style.display = "block";
}

/*function initMap() {
    var coordinates = {lat: 61.001283, lng: 69.030192},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });
}
/*AIzaSyCxOG8ST8QvrQD63tLXOPU71iXcJsQPhU4*/

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