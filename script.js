// Captures DOM elements
var leftPanel = document.getElementById('leftPanel');
var rightPanel = document.getElementById('rightPanel');
var fab = document.getElementById('fab');

// Captures window height and sets 'Task' and 'History' panels to that height
var w = window.innerWidth;
var h = window.innerHeight;
leftPanel.style.height = h - 16 + "px";
rightPanel.style.height = h - 16 + "px";

// Executes when user clicks Floating Action Button
fab.onclick = function() {
  // Code...
}
