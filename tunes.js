(function () {
  'use strict';

  console.log("tunes.js: 3 - Pickin = ", Pickin);
  
  var listLink = document.getElementById("link-list-tunes");
  // var homeView = document.getElementById("choose-panel");
  var listView = document.getElementById("list-tunes-view");
  var addView = document.getElementById("add-tune-view");

	// need to call Pickin.getTunes w/ a callback 
  // because JSON loads asynchronously
	Pickin.getTunes(function (tunes) {
    // console.log("tunes.js:13 - tunes = ", tunes); // confirm they're in the array
    Pickin.tunesToDom(tunes);
    //Pickin.getTunes(Pickin.tunesToDom)
    
	})

  listLink.addEventListener("click", function() {

    // console.log("tunes.js:17 - tunes = ", tunes); // confirm they're in the array
    // homeView.classList.add("hidden");
    addView.classList.add("hidden");

    listView.classList.add("visible");
    listView.classList.remove("hidden");

    //To be figured out
    Pickin.getTunes(Pickin.tunesToDom)
  });


	// could also be done using Promise instead:
	// Pickin.getTunes().then(function (t) {
	// 	tunes = t;
	// [...]
	// });




})();