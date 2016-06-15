var Pickin = (function (newTune) {
  'use strict';

  console.log("createTune.js: 3 -  newTune = ", newTune);

  // need to call Pickin.getTunes w/ a callback 
  // because JSON loads asynchronously
  Pickin.addTune(function (tune) {
    console.log("addTune.js:8 - tune = ", tune); // confirm they're in the array

    var addLink = document.getElementById("link-add-tune");
    var addView = document.getElementById("add-tune-view");

    addLink.addEventListener("click", function() {
      console.log("addTune.js:14 ");
      
    });
  })
  // all done
  return newTune;

})(Pickin || {});