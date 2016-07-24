(function () {
  'use strict';
  
  var addTuneLink = document.getElementById("link-add-tune");
  var addTuneView = document.getElementById("add-tune-view");
  var addArtistLink = document.getElementById("link-add-artist");
  var addArtistView = document.getElementById("add-artist-view");
  var listView = document.getElementById("list-tunes-view");
  var artistInputValue = document.getElementById("add-tune-select-artist");
  var titleInputValue = document.getElementById("tune-title");
  var albumInputValue = document.getElementById("album-title");

  addTuneLink.addEventListener("click", function() {

    listView.classList.add("hidden");
    addArtistView.classList.add("hidden");

    addTuneView.classList.add("visible");
    addTuneView.classList.remove("hidden");

  });

  var addButton = document.getElementById("add-tune-button");
  addButton.addEventListener("click", function() {
    // console.log("add button clicked, artist = ", artistInputValue.value);
    // console.log("add button clicked, title = ", titleInputValue.value);
    // console.log("add button clicked, album = ", albumInputValue.value);


    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/api/tune');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
                          Pickin.getTunes(Pickin.tunesToDom);
                          addTuneView.classList.add("hidden");
                          listView.classList.add("visible");
                          listView.classList.remove("hidden");
                  };
    var newTuneObject = {
      TuneTitle: titleInputValue.value,
      ArtistId: artistInputValue.value
    };
    console.log("newTuneObject = ", newTuneObject);
    xhr.send(JSON.stringify({
      TuneTitle: titleInputValue.value,
      ArtistId: artistInputValue.value
    }));

  })

})();