// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  console.log("tunesToDom.js:7 - Pickin = ", Pickin);
  console.log("tunesToDom.js:8 - pickin = ", pickin);

  pickin.tunesToDom = function (tunes) {

    console.log("tunesToDom.js:12 - tunes = ", tunes);

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
      console.log("long phrase = ",  "<button type=&quot;button&quot; class=&quot;btn btn-default btn-xs &quot;;");
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

    // now prepare to sensitize the rows
    var rows = tunesTable.getElementsByTagName("tr");
    console.log("rows = ", rows);

    // first add click handlers to table rows in support of selection
    for (i = 0; i < rows.length; i++) {
      var currentRow = tunesTable.rows[i];
      var createClickHandler = 
        function(row) {
          console.log("inside createClickHandler");
          return function() { 
            console.log("clickHandler called");
            var cell = row.getElementsByTagName("td")[0];
            var id = cell.innerHTML;
            alert("id:" + id);
          };
        };
      currentRow.onclick = createClickHandler(currentRow);
    }

    // to setup Delete click handlers, first get all the Delete buttons
    var tableDeleteButtons = tunesTable.getElementsByTagName("button");
    console.log("tableDeleteButtons = ", tableDeleteButtons);

    // then attach delete functionality to each Delete button
    for (i = 0; i < numTunes; i++) {

      // create the clickhandler
      var createDeleteClickHandler = 
        function(button) {
          // console.log("inside createDeleteClickHandler");
          return function() { 
            console.log("returning function on button ", button);
            var idStrings = button.getElementsByTagName("id");
            var deleteId = parseInt(idStrings[0]);
            alert("deleteId:" + deleteId);
            console.log("currentDeleteButton = ", currentDeleteButton);
          };
        };

      // get the Delete button
      var currentDeleteButton = tableDeleteButtons[i];
      // console.log("currentDeleteButton = ", currentDeleteButton);

      // and attach the clickhandler
      currentDeleteButton.onclick = createDeleteClickHandler(currentDeleteButton);
      

    }

  }



  // all done
  return pickin;
  
})(Pickin || {});