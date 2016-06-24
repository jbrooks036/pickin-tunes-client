(function () {
  'use strict';

  console.log("addForm.js: 4 - Pickin = ", Pickin);
  
	var addLink = document.getElementById("link-add-tune");
  var addView = document.getElementById("add-tune-view");
  var listView = document.getElementById("list-tunes-view");
  var artistInputValue = document.getElementById("artist-name");
  var titleInputValue = document.getElementById("tune-title");
  var albumInputValue = document.getElementById("album-title");

	addLink.addEventListener("click", function() {
    console.log("addForm.js:10");

    listView.classList.add("hidden");

    addView.classList.add("visible");
    addView.classList.remove("hidden");

  });

  var addButton = document.getElementById("add-button");
  addButton.addEventListener("click", function() {
    console.log("add button clicked, artist = ", artistInputValue.value);
    console.log("add button clicked, title = ", titleInputValue.value);
    console.log("add button clicked, album = ", albumInputValue.value);


    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/api/tune');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var tune = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({
      TuneTitle: titleInputValue.value
    }));

    artistInputValue.innerHTML = "";
  })

})();