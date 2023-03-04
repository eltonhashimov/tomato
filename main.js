var pep = document.querySelector(".box-pep img")
pep.onmousedown = function (event) {

  let shiftX = event.clientX - pep.getBoundingClientRect().left;
  let shiftY = event.clientY - pep.getBoundingClientRect().top;

  // pep.style.position = 'absolute';
  pep.style.zIndex = 1000;
  pep.style.width = '240px';
  pep.style.height = '240px';
  document.body.append(pep);

  moveAt(event.pageX, event.pageY);

  // moves the ball at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    pep.style.left = pageX + shiftX + 'px';
    pep.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the ball, remove unneeded handlers
  pep.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    pep.onmouseup = null;
  };

  var canvas = document.getElementById("demo");
  var context = canvas.getContext("2d");

  canvas.onmousemove = function (e) {
    var mouseX = Math.floor(e.offsetX);
    var mouseY = Math.floor(e.offsetY);
    context.beginPath();
    context.arc(mouseX, mouseY, 30, 0, 50 * Math.PI);
    context.closePath();
    context.fillStyle = "rgb(255,0,0)";
    context.fill();


  }



};
pep.ondragstart = function () {
  return false;
};



var pep2 = document.querySelector(".box-pop img")
pep2.onmousedown = function (event) {

  let shiftX = event.clientX - pep2.getBoundingClientRect().left;
  let shiftY = event.clientY - pep2.getBoundingClientRect().top;

  pep2.style.position = 'absolute';
  pep2.style.zIndex = 1000;
  pep2.style.width = '50px';
  pep2.style.height = '50px';
  document.body.append(pep2);

  moveAt(event.pageX, event.pageY);

  // moves the ball at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    pep2.style.left = pageX - shiftX + 'px';
    pep2.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the ball, remove unneeded handlers
  pep2.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    pep2.onmouseup = null;
  };

  pep2.ondragstart = function () {
    return false;
  };
};
