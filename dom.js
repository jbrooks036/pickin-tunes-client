(function () {
  'use strict';

  console.log("dom.js: 4 - Pickin = ", Pickin);
  
	// need to call Pickin.getTunes w/ a callback 
  // because JSON loads asynchronously
	Pickin.getTunes(function (tunes) {
    // console.log("tunes.js:13 - tunes = ", tunes); // confirm they're in the array

		listLink.addEventListener("click", function() {

      // console.log("tunes.js:17 - tunes = ", tunes); // confirm they're in the array
      // homeView.classList.add("hidden");
      addView.classList.add("hidden");

      listView.classList.add("visible");
      listView.classList.remove("hidden");

      //To be figured out
      Pickin.tunesToDom(tunes);

		});
	})
	// could also be done using Promise instead:
	// Pickin.getTunes().then(function (t) {
	// 	tunes = t;
	// [...]
	// });




})();