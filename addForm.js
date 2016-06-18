(function () {
  'use strict';

  console.log("addForm.js: 4 - Pickin = ", Pickin);
  
	var addLink = document.getElementById("link-add-tune");
  var addView = document.getElementById("add-tune-view");
  var listView = document.getElementById("list-tunes-view");
  var titleInputValue = document.getElementById("tune-title");

	addLink.addEventListener("click", function() {
    console.log("addForm.js:10");

    listView.classList.add("hidden");

    addView.classList.add("visible");
    addView.classList.remove("hidden");

  });

  var addButton = document.getElementById("add-button");
  addButton.addEventListener("click", function() {
    console.log("add button clicked, value = ", titleInputValue.value);
  })

})();