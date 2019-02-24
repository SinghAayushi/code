var pdfreader = require('pdfreader');
const fs = require('fs');
 
var rows = {}; // indexed by y-position
 
function printRows() {
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach((y) => console.log((rows[y] || []).join('')));
}
 
new pdfreader.PdfReader().parseFileItems('page.pdf', function(err, item){
  //var allText = item.y;
  //console.log("-------------------------------------------------------------------");
  //console.log(allText);
  if (!item || item.page) {
    // end of file, or page
    printRows();
    //console.log('PAGE:', item.page);
    rows = {}; // clear rows for next page
  }
  else if (item.text) {
     
    // accumulate text items into rows object, per line
    (rows[item.y] = rows[item.y] || []).push(item.text);
    var allText = item.text; 
    fs.appendFile('page.txt', allText, _ => console.log('HTML saved'));

    

    //console.log(allText);
  }
});