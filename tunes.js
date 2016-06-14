var Pickin = (function () {

  console.log("tunes.js: 4 - Pickin = ", Pickin);
  
	// this won't work because it's synchronous, 
	// whereas JSON loading is async(!)
	// var tunes = Pickin.getTunes();

	Pickin.getTunes(function (tunes) {
		console.log("tunes.js:12 - tunes = ", tunes); // confirm they're in the array

		var listLink = document.getElementById("link-list-tunes");
		var listView = document.getElementById("list-tunes-view");


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
		});

	// could also be done using Promise instead:
	// Pickin.getTunes().then(function (t) {
	// 	tunes = t;
	// [...]
	// });

})(Pickin || {});