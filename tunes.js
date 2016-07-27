(function () {
  'use strict';
  
  // grab these DOM elements for SPA navigation 
  var listLink = document.getElementById("link-list-tunes");
  var listView = document.getElementById("list-tunes-view");
  var addTuneLink = document.getElementById("link-add-tune");
  var addTuneView = document.getElementById("add-tune-view");
  var addArtistLink = document.getElementById("link-add-artist");
  var addArtistView = document.getElementById("add-artist-view");

	// need to call Pickin.getTunes() w/ a callback 
  // because JSON loads asynchronously
  Pickin.getTunes(Pickin.tunesToDom);

  // event listener for navigating to "View Tunes"
  listLink.addEventListener("click", function() {

    addTuneView.classList.add("hidden");
    addArtistView.classList.add("hidden");
    listView.classList.add("visible");
    listView.classList.remove("hidden");

    Pickin.getTunes(Pickin.tunesToDom);
  });

})();