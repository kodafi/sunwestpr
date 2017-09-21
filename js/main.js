$(function() {

	$("nav .menu-button").click(function(event){
		$('nav > ul').slideToggle(300);
	});
	
/* ==========================================================================
   Contact Page Google Map Section
   ========================================================================== */
   if ( $('#map')[0] ) {
	 	
		function initialize() {
		  var myLatlng = new google.maps.LatLng(32.929316,-96.818617);
		  var mapOptions = {
			zoom: 14,
			center: myLatlng
		  }
		  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
			
		  var marker = new google.maps.Marker({
			  position: myLatlng,
			  map: map,
			  title: '13355 Noel Rd #1000'
		  });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
		  
   }
	  
});
