import React, { useEffect } from 'react';

const CanvasWithImg = (props) => {
  useEffect(() => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var imageObj = null;
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    var cw = canvas.width;
    var ch = canvas.height;
    imageObj = new Image();
    imageObj.onload = function () {
      ctx.drawImage(imageObj, 0, 0, cw, ch);
    };
    imageObj.src = '/dummy_bank_image.png';
    function reOffset() {
      var BB = canvas.getBoundingClientRect();
      offsetX = BB.left;
      offsetY = BB.top;
    }
    var offsetX, offsetY;
    reOffset();
    window.onscroll = function (e) {
      reOffset();
    };
    window.onresize = function (e) {
      reOffset();
    };

    var isDown = false;
    var startX, startY;
    var mouseX, mouseY;

    var rects = [];
    var newRect;

    // $("#canvas").mousedown(function(e){handleMouseDown(e);});
    // $("#canvas").mousemove(function(e){handleMouseMove(e);});
    // $("#canvas").mouseup(function(e){handleMouseUp(e);});
    // $("#canvas").mouseout(function(e){handleMouseOut(e);});

    canvas.addEventListener('mousedown', handleMouseDown);

    canvas.addEventListener('mousemove', handleMouseMove);

    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseup', handleMouseOut);

    function handleMouseDown(e) {
      // tell the browser we're handling this event
      e.preventDefault();
      e.stopPropagation();
      canvas.style.cursor = 'crosshair';

      startX = parseInt(e.clientX - offsetX);
      startY = parseInt(e.clientY - offsetY);

      // Put your mousedown stuff here
      isDown = true;
    }

    function handleMouseUp(e) {
      // tell the browser we're handling this event
      e.preventDefault();
      e.stopPropagation();

      mouseX = parseInt(e.clientX - offsetX);
      mouseY = parseInt(e.clientY - offsetY);

      // Put your mouseup stuff here
      isDown = false;

      if (!willOverlap(newRect)) {
        rects.push(newRect);
      }
      drawAll();
    }

    function drawAll() {
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(imageObj, 0, 0, cw, ch);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'green';
      console.log(rects);
      for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        ctx.strokeRect(r.left, r.top, r.right - r.left, r.bottom - r.top);
      }
    }

    function handleMouseOut(e) {
      // tell the browser we're handling this event
      e.preventDefault();
      e.stopPropagation();

      mouseX = parseInt(e.clientX - offsetX);
      mouseY = parseInt(e.clientY - offsetY);

      // Put your mouseOut stuff here
      isDown = false;
    }

    function handleMouseMove(e) {
      if (!isDown) {
        return;
      }
      // tell the browser we're handling this event
      e.preventDefault();
      e.stopPropagation();

      mouseX = parseInt(e.clientX - offsetX);
      mouseY = parseInt(e.clientY - offsetY);

      newRect = {
        left: Math.min(startX, mouseX),
        right: Math.max(startX, mouseX),
        top: Math.min(startY, mouseY),
        bottom: Math.max(startY, mouseY),
      };

      drawAll();
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 3;
      ctx.strokeRect(startX, startY, mouseX - startX, mouseY - startY);
    }

    function willOverlap(newRect) {
      // shortcut to the new potential rect
      var r2 = newRect;

      // test if one rect is completely inside another rect
      var isInside = function (rect1, rect2) {
        return (
          rect2.left >= rect1.left &&
          rect2.right <= rect1.right &&
          rect2.top >= rect1.top &&
          rect2.bottom <= rect1.bottom
        );
      };

      // test if the new rect is overlapping any existing rect
      var isOverlapping = false;
      for (var i = 0; i < rects.length; i++) {
        var r1 = rects[i];
        //
        var isIntersecting = !(
          r2.left > r1.right ||
          r2.right < r1.left ||
          r2.top > r1.bottom ||
          r2.bottom < r1.top
        );
        //
        var isContained = isInside(r1, r2) || isInside(r2, r1);
        //
        if (isIntersecting || isContained) {
          isOverlapping = true;
        }
      }
      return isOverlapping;
    }
  }, []);

  return (
    <div>
      <canvas
        width="400"
        height="200"
        style={{ background: '#fff' }}
        id="canvas"
      ></canvas>
    </div>
  );
};

export default CanvasWithImg;
