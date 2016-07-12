(function () {
  'use strict';
  
  var selectArtist = document.getElementById("select-artist");

	// need to call Pickin.getArtists w/ a callback 
  // because JSON loads asynchronously
  Pickin.getArtists(Pickin.artistsToDom);

  selectArtist.addEventListener("click", function() {

    Pickin.getArtists(Pickin.artistsToDom);
  });

})();