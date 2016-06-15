(function () {
  'use strict';

  console.log("home.js: 3 - Pickin = ", Pickin);
  
	var homeLink = document.getElementById("link-home");
  var homeView = document.getElementById("home-view");
  var listView = document.getElementById("list-tunes-view");
  var addView = document.getElementById("add-tune-view");

	homeLink.addEventListener("click", function() {
    listView.classList.add("visible");
    addView.classList.add("hidden");

    homeView.classList.add("visible");
    homeView.classList.remove("hidden");
	});

})();