var Pickin = (function () {

  console.log("home.js: 3 - Pickin = ", Pickin);
  
	// need to call Pickin.getTunes w/ a callback 
  // because JSON loads asynchronously
	Pickin.getTunes(function (tunes) {
		console.log("home.js:8 - tunes = ", tunes); // confirm they're in the array

		var homeLink = document.getElementById("link-home");
		var homeView = document.getElementById("home-view");

		homeLink.addEventListener("click", function() {
        listView.classList.add("hidden");
        addView.classList.add("hidden");

        homeView.classList.add("visible");
        homeView.classList.remove("hidden");

/*
  		// {Song name} by {Artist} on the album {Album}
  		var song1Title = document.getElementById("song1-title");
  		song1Title.innerHTML = tunes[0].title;
  		var song1Artist = document.getElementById("song1-artist");
  		song1Artist.innerHTML = tunes[0].artist;
  		var song1Album = document.getElementById("song1-album");
  		song1Album.innerHTML = tunes[0].album;

  		var song2Title = document.getElementById("song2-title");
  		song2Title.innerHTML = tunes[1].title;
  		var song2Artist = document.getElementById("song2-artist");
  		song2Artist.innerHTML = tunes[1].artist;
  		var song2Album = document.getElementById("song2-album");
  		song2Album.innerHTML = tunes[1].album;

  		var song3Title = document.getElementById("song3-title");
  		song3Title.innerHTML = tunes[2].title;
  		var song3Artist = document.getElementById("song3-artist");
  		song3Artist.innerHTML = tunes[2].artist;
  		var song3Album = document.getElementById("song3-album");
  		song3Album.innerHTML = tunes[2].album;
*/
		});

  })
	// could also be done using Promise instead:
	// Pickin.getTunes().then(function (t) {
	// 	tunes = t;
	// [...]
	// });

})(Pickin || {});