(function () {
  'use strict';
  
  var addTuneLink = document.getElementById("link-add-tune");
  var addTuneView = document.getElementById("add-tune-view");
  var addArtistLink = document.getElementById("link-add-artist");
  var addArtistView = document.getElementById("add-artist-view");
  var listView = document.getElementById("list-tunes-view");
  var artistInputValue = document.getElementById("add-artist-name");
  var titleInputValue = document.getElementById("tune-title");
  var albumInputValue = document.getElementById("album-title");

  addArtistLink.addEventListener("click", function() {

    listView.classList.add("hidden");
    addTuneView.classList.add("hidden");

    addArtistView.classList.add("visible");
    addArtistView.classList.remove("hidden");

  });

  var addButton = document.getElementById("add-artist-button");
  addButton.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/api/artist');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
                          Pickin.getAllTunes(Pickin.tunesToDom);
                          addArtistView.classList.add("hidden");
                          listView.classList.add("visible");
                          listView.classList.remove("hidden");
                  };
    xhr.send(JSON.stringify({
      ArtistName: artistInputValue.value
    }));

    artistInputValue.innerHTML = "";
  })

})();