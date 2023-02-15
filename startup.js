/* use this image as the background http://paris1900.lartnouveau.com/paris06/jardin_du_luxembourg/plan/1plan1_lux.JPG */
document.body.style.backgroundImage = 'url(http://paris1900.lartnouveau.com/paris06/jardin_du_luxembourg/plan/1plan1_lux.JPG)';
document.body.style.backgroundSize = '100%';

/* make a grid of square over the background */
var grid = document.createElement('div');
grid.style.position = 'absolute';
grid.style.top = '0';
grid.style.left = '0';
grid.style.width = '100%';
grid.style.height = '100%';
grid.style.backgroundColor = 'rgba(0,0,0,0.5)';
document.body.appendChild(grid);

/* the user can select multiple square of the grid with the mouse */
var selected = [];
grid.onmousedown = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  var square = document.createElement('div');
  square.style.position = 'absolute';
  square.style.top = y + 'px';
  square.style.left = x + 'px';
  square.style.width = '0px';
  square.style.height = '0px';
  square.style.backgroundColor = 'rgba(255,255,255,0.5)';
  grid.appendChild(square);
  selected.push(square);
  grid.onmousemove = function(e) {
    var x2 = e.clientX;
    var y2 = e.clientY;
    var w = x2 - x;
    var h = y2 - y;
    if (w < 0) {
      square.style.left = x2 + 'px';
      w = -w;
    }
    if (h < 0) {
      square.style.top = y2 + 'px';
      h = -h;
    }
    square.style.width = w + 'px';
    square.style.height = h + 'px';
  };
  grid.onmouseup = function() {
    grid.onmousemove = null;
    grid.onmouseup = null;
  };
};

/* the square that user select can not overlap. */
var selected = [];
grid.onmousedown = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  var square = document.createElement('div');
  square.style.position = 'absolute';
  square.style.top = y + 'px';
  square.style.left = x + 'px';
  square.style.width = '0px';
  square.style.height = '0px';
  square.style.backgroundColor = 'rgba(255,255,255,0.5)';
  grid.appendChild(square);
  selected.push(square);
  grid.onmousemove = function(e) {
    var x2 = e.clientX;
    var y2 = e.clientY;
    var w = x2 - x;
    var h = y2 - y;
    if (w < 0) {
      square.style.left = x2 + 'px';
      w = -w;
    }
    if (h < 0) {
      square.style.top = y2 + 'px';
      h = -h;
    }
    square.style.width = w + 'px';
    square.style.height = h + 'px';
    for (var i = 0; i < selected.length; i++) {
      if (selected[i] === square) continue;
      if (selected[i].offsetLeft + selected[i].offsetWidth < square.offsetLeft) continue;
      if (selected[i].offsetLeft > square.offsetLeft + square.offsetWidth) continue;
      if (selected[i].offsetTop + selected[i].offsetHeight < square.offsetTop) continue;
      if (selected[i].offsetTop > square.offsetTop + square.offsetHeight) continue;
      grid.removeChild(square);
      selected.splice(selected.indexOf(square), 1);
      grid.onmousemove = null;
      grid.onmouseup = null;
      return;
    }
  };
  grid.onmouseup = function() {
    grid.onmousemove = null;
    grid.onmouseup = null;
  };
};

/* each of those tabs can be selectable. When a tab is select it his highlighted. */
var tabs = document.createElement('div');
tabs.style.position = 'absolute';
tabs.style.top = '0';
tabs.style.left = '0';
tabs.style.width = '100%';
tabs.style.height = '50px';
tabs.style.backgroundColor = 'rgba(255,255,255,0.5)';
document.body.appendChild(tabs);
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (var i = 0; i < days.length; i++) {
  var tab = document.createElement('div');
  tab.style.position = 'absolute';
  tab.style.top = '0';
  tab.style.left = (i * 100 / days.length) + '%';
  tab.style.width = (100 / days.length) + '%';
  tab.style.height = '50px';
  tab.style.backgroundColor = 'rgba(0,0,0,0.5)';
  tab.innerHTML = days[i];
  tab.onclick = function() {
    for (var j = 0; j < tabs.children.length; j++) {
      tabs.children[j].style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    this.style.backgroundColor = 'rgba(255,255,255,0.5)';
  };
  tabs.appendChild(tab);
}

/* a tab is always selected for now. When a square is drawn by a user on the grid we store it in an index that belong to the current tab */
var tabs = document.createElement('div');
tabs.style.position = 'absolute';
tabs.style.top = '0';
tabs.style.left = '0';
tabs.style.width = '100%';
tabs.style.height = '50px';
tabs.style.backgroundColor = 'rgba(255,255,255,0.5)';
document.body.appendChild(tabs);
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var selected = {};
for (var i = 0; i < days.length; i++) {
  selected[days[i]] = [];
  var tab = document.createElement('div');
  tab.style.position = 'absolute';
  tab.style.top = '0';
  tab.style.left = (i * 100 / days.length) + '%';
  tab.style.width = (100 / days.length) + '%';
  tab.style.height = '50px';
  tab.style.backgroundColor = 'rgba(0,0,0,0.5)';
  tab.innerHTML = days[i];
  tab.onclick = function() {
    for (var j = 0; j < tabs.children.length; j++) {
      tabs.children[j].style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    this.style.backgroundColor = 'rgba(255,255,255,0.5)';
  };
  tabs.appendChild(tab);
}
tabs.children[0].onclick();
var selected = [];
grid.onmousedown = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  var square = document.createElement('div');
  square.style.position = 'absolute';
  square.style.top = y + 'px';
  square.style.left = x + 'px';
  square.style.width = '0px';
  square.style.height = '0px';
  square.style.backgroundColor = 'rgba(255,255,255,0.5)';
  grid.appendChild(square);
  selected.push(square);
  grid.onmousemove = function(e) {
    var x2 = e.clientX;
    var y2 = e.clientY;
    var w = x2 - x;
    var h = y2 - y;
    if (w < 0) {
      square.style.left = x2 + 'px';
      w = -w;
    }
    if (h < 0) {
      square.style.top = y2 + 'px';
      h = -h;
    }
    square.style.width = w + 'px';
    square.style.height = h + 'px';
    for (var i = 0; i < selected.length; i++) {
      if (selected[i] === square) continue;
      if (selected[i].offsetLeft + selected[i].offsetWidth < square.offsetLeft) continue;
      if (selected[i].offsetLeft > square.offsetLeft + square.offsetWidth) continue;
      if (selected[i].offsetTop + selected[i].offsetHeight < square.offsetTop) continue;
      if (selected[i].offsetTop > square.offsetTop + square.offsetHeight) continue;
      grid.removeChild(square);
      selected.splice(selected.indexOf(square), 1);
      grid.onmousemove = null;
      grid.onmouseup = null;
      return;
    }
  };
  grid.onmouseup = function() {
    grid.onmousemove = null;
    grid.onmouseup = null;
    for (var i = 0; i < tabs.children.length; i++) {
      if (tabs.children[i].style.backgroundColor === 'rgba(255, 255, 255, 0.5)') {
        selected[tabs.children[i].innerHTML].push(square);
        break;
      }
    }
  };
};
