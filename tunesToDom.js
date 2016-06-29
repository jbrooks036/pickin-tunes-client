// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  // console.log("tunesToDom.js:7 - Pickin = ", Pickin);
  // console.log("tunesToDom.js:8 - pickin = ", pickin);

  pickin.tunesToDom = function (tunes) {

    // console.log("tunesToDom.js:12 - tunes = ", tunes);

    var tunesTable = document.getElementById("tunes-table");
    var numTunes = tunes.length;
    // var cumTable = "<thead><tr><th>Id</th><th>Artist</th><th>Title</th><th>Album</th></tr></thead>";
    var cumTable = "<thead><tr><th>Id</th><th>Title</th></tr></thead>";

    // populate table
    for (var i = 0; i < numTunes; i++)
    {
      var tuneId = tunes[i].TuneId;
      // console.log("tuneId = ", tuneId);
      var str = "id=" + tuneId;
      // console.log("str = ", str);
      // console.log("long phrase = ",  "<button type=&quot;button&quot; class=&quot;btn btn-default btn-xs &quot;;");
      var tableRow = "<tr><td>" + tuneId
        // + "</td><td>"
        // + tunes[i].artist
        + "</td><td>"
        + tunes[i].TuneTitle
        + "</td><td>"
//        + "<button type=&quot;button&quot; class=&quot;btn btn-default btn-xs&quot; id=tuneId;>Delete</button>" 
        + "<button type=button class='btn btn-default btn-xs' "
        + str 
        + ">Delete</button>" 
          // + tunes[i].album
        + "</td></tr>";
      console.log("tableRow[i] = ", i, tableRow);
      cumTable += tableRow;

    }
    tunesTable.innerHTML = cumTable;

    // now prepare to sensitize the row elements
    var rows = tunesTable.getElementsByTagName("tr");
    console.log("rows = ", rows);

    // first add click handlers to table rows in support of selection
    for (i = 0; i < rows.length; i++) {
      var currentRow = tunesTable.rows[i];
      var createRowClickHandler = 
        function(row) {
          // console.log("inside createClickHandler");
          return function() { 
            console.log("RowClickHandler called");
            var cell = row.getElementsByTagName("td")[0];
            var id = cell.innerHTML;
            console.log("RowClick/tuneId:" + id);
          };
        };
      currentRow.onclick = createRowClickHandler(currentRow);
    }

    // to setup Delete click handlers, first get all the Delete buttons
    var tableDeleteButtons = tunesTable.getElementsByTagName("button");
    console.log("tableDeleteButtons = ", tableDeleteButtons);

    // then attach delete functionality to each Delete button
    for (i = 0; i < numTunes; i++) {

      // create the clickhandler
      var createDeleteClickHandler = 
        function(button) {
          console.log("createDeleteClickHandler: button = ", button);
          return function() { 
            // first get the tuneId from the Delete button
            console.log("DeleteClickHandler called on button:", button);
            var idString = button.id;
            // console.log("idString = ", idString);
            var tuneId = parseInt(idString);
            console.log("DeleteClick/tuneId:" + tuneId);


            // then send the xhr request for deleting that tune to backend
            var xhr = new XMLHttpRequest();
            var urlAddr = 'http://localhost:5000/api/tune/' + tuneId;
            console.log ("urlAddr = ", urlAddr); 
            xhr.open('DELETE', urlAddr);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
              console.log("xhr.status = ", xhr.status);
              Pickin.getTunes(Pickin.tunesToDom);
            };
            xhr.send();

          };
        };

      // get the Delete button and attach the clickhandler
      var currentDeleteButton = tableDeleteButtons[i];
      currentDeleteButton.onclick = createDeleteClickHandler(currentDeleteButton);
      
    }

  }


  // all done
  return pickin;
  
})(Pickin || {});