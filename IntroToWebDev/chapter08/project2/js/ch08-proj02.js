/* add your code here */

// Parsing
var photos = JSON.parse(content);

// Function that calls the card output function as long as there are elements in the array
for(var i =0; i<photos.length; i++)
{
  outputCard(photos[i]);
}

// Function that outputs the card that contains each picture and its description/colors
function outputCard(photo) {
    document.write(`<article>`)
    document.write('<div class="card">');
    document.write('<img src="images/' + photo.filename + '" alt="' + photo.title + '">');
    document.write('<div class="card-text">');
    document.write('<h2>' + photo.title + '</h2>');
    document.write('<p>' + photo.location.city +', '+ photo.location.country + '</p>');
    document.write('<h3>Colors</h3>');
    outputColors(photo.colors);
    document.write('</div>');
    document.write('</div>');
    document.write(`</article>`)
  }

// Function that outputs the colors of each image
function outputColors(colors)
{
    document.write('<span>'); 
    for(var i=0; i <colors.length;  i++) 
  {
    document.write(constructColor(colors[i]));
  }
  document.write('</div>');
}

// Function that names each color (for the output function)
function constructColor(color) {
    var style = constructStyle(color);
    return '<div class="color-block" style="' + style + '">' + color.name + '</div>';
  }

// Function that paints each background according to the color (for the output function)
function constructStyle(color) {
    var bgColor = color.hex;
    var textColor = (color.luminance < 70) ? '#ffffff' : '#000000';
    return 'background-color: ' + bgColor + '; color: ' + textColor + ';' + "padding: 15px;" + "text-align: center;";
  }
  
  