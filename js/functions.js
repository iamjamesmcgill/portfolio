jQuery(document).ready(function () {

	$('video').click(function(){this.paused?this.play():this.pause();});

	$('.browser-scroll').click(function(){
		$(this).css("height", "100%");
		$(this).append('<style>.browser-scroll:before{display:none!important;}</style>');
	});

  $(window).blur(function(){
		document.title = 'Wait, come back!';
	});

	$(window).focus(function(){
		document.title = 'James McGill';
	});

  $(window).scroll(function() {
      if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
          $("footer").addClass("show")
      } else {
          $("footer").removeClass("show");
          }
   });

	var inviewResume = new Waypoint.Inview({
	  element: $('#resume')[0],
	  enter: function(direction) {
	    $('#resume').addClass("fade-in");
	    $('.work-logo').addClass("hide");
	  },
	  exited: function(direction) {
	    $('#resume').removeClass("fade-in");
	    $('.work-logo').removeClass("hide");
	  }
	});

	var inviewVideo = new Waypoint.Inview({
	  element: $('.vid-1')[0],
	  entered: function(direction) {
	    $('.vid-1')[0].play();
	  },
	  exited: function(direction) {
	    $('.vid-1')[0].pause();
	  }
	});

	var inviewVideo = new Waypoint.Inview({
	  element: $('.vid-2')[0],
	  entered: function(direction) {
	    $('.vid-2')[0].play();
	  },
	  exited: function(direction) {
	    $('.vid-2')[0].pause();
	  }
	});

	var inviewVideo = new Waypoint.Inview({
	  element: $('.vid-3')[0],
	  entered: function(direction) {
	    $('.vid-3')[0].play();
	  },
	  exited: function(direction) {
	    $('.vid-3')[0].pause();
	  }
	});

	var inviewVideo = new Waypoint.Inview({
	  element: $('.vid-4')[0],
	  entered: function(direction) {
	    $('.vid-4')[0].play();
	  },
	  exited: function(direction) {
	    $('.vid-4')[0].pause();
	  }
	});

});

function lfmMostRecentTrack(JSONdata) {
  var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
  if(oTrack.image[1]["#text"] != "")
  document.getElementById("lfmMostRecentTrackImage").src = oTrack.image[3]["#text"] ;
  document.getElementById("lfmMostRecentTrackArtist").innerHTML = oTrack.artist["#text"];
  document.getElementById("lfmMostRecentTrackTitle").href = "http://www.last.fm/user/iamjamesmcgill";
  document.getElementById("lfmMostRecentTrackTitle").innerHTML = oTrack.name;
  document.getElementById("lfmMostRecentTrackDate").innerHTML = (typeof oTrack.date=="undefined"?"now playing":oTrack.date["#text"]);
}
