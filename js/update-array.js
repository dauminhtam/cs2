//Creat the array and assign it value
var colors = ['white', 'black', 'custom'];

//update the third item in the array
colors[2] = 'beige';

//get the element with an id of colors
var el = document.getElementById( 'colors');

el.textContent = colors[2];