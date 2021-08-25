//Color Banner
var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["#1e272e","#747d8c","#ff4757","#1B9CFC","#7bed9f","#ff793f","#eb3b5a"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}


setInterval(change,5000);