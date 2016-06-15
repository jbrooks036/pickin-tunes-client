(function () {
  'use strict';

  console.log("tunes.js: 3 - Pickin = ", Pickin);
  
  var listLink = document.getElementById("link-list-tunes");
  var listView = document.getElementById("list-tunes-view");
  var addView = document.getElementById("add-tune-view");

	// need to call Pickin.getTunes w/ a callback 
  // because JSON loads asynchronously
  Pickin.getTunes(Pickin.tunesToDom);

  listLink.addEventListener("click", function() {

    addView.classList.add("hidden");
    listView.classList.add("visible");
    listView.classList.remove("hidden");

    Pickin.getTunes(Pickin.tunesToDom);
  });

})();