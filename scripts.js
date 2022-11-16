var b = document.querySelector("body");
var cars = document.querySelectorAll(".i");

function menuEnFlech(){
   b.style.setProperty('--wid','50%');   
   b.style.setProperty('--rot','29deg');   
   b.style.setProperty('--trans','-10%, -60%');   
   b.style.setProperty('--wid2','0%');
};

function menuNormal(){
   b.style.setProperty('--wid','');   
   b.style.setProperty('--rot','');   
   b.style.setProperty('--trans','');   
   b.style.setProperty('--wid2','');
};

function retour(){
for(var i = 0; i <= cars.length; i++){
          try{cars[i].classList.remove("i2");
                  cars[i].style.filter ="";
                  cars[i].style.transitionDuration=".4s";
           }
   catch(z){var error = z ;}                   
};
   b.style.setProperty('--etiq-disp','');
   b.style.setProperty('--etiq-top',''); 
   b.style.setProperty('--prix-bot','');
   topp.style.top="";
   jen.style.top="";         

   cars.style.height="8%";
   cars.style.transitionDelay="0s";

   menuNormal();
};       

(function(){
var data =   
         document.getElementById('m2').innerHTML;

var DOMURL = window.URL || window.webkitURL || window;

var svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });

var url = DOMURL.createObjectURL(svgBlob);

var image = document.createElement('img');
        image.src = url;
        image.className="s";

  jen.appendChild(image);
})();

$('.carousel').carousel({ interval:(999999*99999) });
                        
for(var i = 0; i <= cars.length; i++){ 

try{cars[i].addEventListener("click", function(){
   this.classList.add("i2");
   this.style.transitionDuration="1s";
   topp.style.top="-10%";
   jen.style.top="3%";                     
   b.style.setProperty('--etiq-disp','none')
   b.style.setProperty('--etiq-top','-370%');   
   b.style.setProperty('--prix-bot','-370%');   
   cars.style.height="0%";
   cars.style.transitionDelay="0s";
   
   menuEnFlech();


});}catch(o){var error = o ;}             
};


$('#carouselExample').on('slide.bs.carousel', function () {     
         retour();
})