var jumboHeight;
var jumboHeightOrig = $('.jumbotron').outerHeight();

function resize(){
    
    var scrolled = $(window).scrollTop();
    jumboHeight = jumboHeightOrig;
    var bgWidth = $('.bg').outerWidth();
    var bgHeight = jumboHeight-scrolled;
    var bgRightHeight = bgWidth / 1.33;

    if (bgHeight > bgRightHeight){
        jumboHeight = bgRightHeight;
        $('.jumbotron').css('height', bgRightHeight + 'px');
        $('.bg').css('height', bgRightHeight + 'px');
    }
}

function parallax(){
    var scrolled = $(window).scrollTop();
    var bgHeight = jumboHeight-scrolled;
    $('.bg').css('height', bgHeight + 'px');
}

$(window).scroll(function(e){
    parallax();
});

$(window).ready(function(e){
    resize();
    parallax();
    fancybox();
});

$(window).resize(function(e){
    resize();
});

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-39.2346753,-71.8263512),
    zoom: 10,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({position: new google.maps.LatLng(-39.2346753,-71.8263512)});

    marker.setMap(map);

}

function fancybox(){
    
    $("a[rel=videos]").fancybox({
            'transitionIn'      : 'elastic',
            'transitionOut'     : 'elastic',
            'width'             : '90%',
            'height'            : '75%',
            'autoScale'         : false,
            'type'              : 'iframe'
        });

	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});

}