AOS.init();

var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        
        $("#header").css({
            "background": "rgba(255,255,255,0.75)", // semi-transparent background
            "color": "black",
            "box-shadow": "0px 3px 10px rgba(0,0,0,0.1)",
            "padding": "4vh 4vw",
            "border-radius": "15px",
            "backdrop-filter": "blur(10px)",
            "margin-top": "20px",
            "width": "90%",
            "margin-left": "5%",
            "margin-right": "5%",
            "padding":"2vh",

            // blurring the background
        });
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("backdrop-filter","");
        $("#header").css("width","");
        $("#header").css("margin","0");
        $("#header").css("background","transparent");
        $("#header").css("color","black");
        $(".about-header").css("color","white");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#header").css("")
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },100);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },100);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },100);
},100);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 180, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  