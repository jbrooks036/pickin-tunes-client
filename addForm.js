(function () {
  'use strict';

  console.log("addForm.js: 4 - Pickin = ", Pickin);
  
	var addLink = document.getElementById("link-add-tune");
  var addView = document.getElementById("add-tune-view");
  var listView = document.getElementById("list-tunes-view");

	addLink.addEventListener("click", function() {
    console.log("addForm.js:10");

    // homeView.classList.add("hidden");
    listView.classList.add("hidden");

    addView.classList.add("visible");
    addView.classList.remove("hidden");

  });

})();