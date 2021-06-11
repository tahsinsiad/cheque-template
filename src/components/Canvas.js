import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    function fillCanvasBackgroundWithColor(canvas, color) {
      // Get the 2D drawing context from the provided canvas.
      const context = canvas.getContext('2d');

      // We're going to modify the context state, so it's
      // good practice to save the current state first.
      context.save();

      // Normally when you draw on a canvas, the new drawing
      // covers up any previous drawing it overlaps. This is
      // because the default `globalCompositeOperation` is
      // 'source-over'. By changing this to 'destination-over',
      // our new drawing goes behind the existing drawing. This
      // is desirable so we can fill the background, while leaving
      // the chart and any other existing drawing intact.
      // Learn more about `globalCompositeOperation` here:
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
      context.globalCompositeOperation = 'destination-over';

      // Fill in the background. We do this by drawing a rectangle
      // filling the entire canvas, using the provided color.
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Restore the original context state from `context.save()`
      context.restore();
    }
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    console.log(canvas.height, canvas.width);
    fillCanvasBackgroundWithColor(canvas, '#fff');
    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.font = '25px Comic Sans MS';
    ctx.fillStyle = '#000';
    ctx.fillText('Tahsin Ahmed Khan', 150, 80);
    ctx.fillText('01/01/2021', 400, 80);
    ctx.fillText('Five hundred taka only', 150, 130);
    ctx.fillText('500', 400, 130);
    ctx.save();

    ctx.translate(100, 100);
    ctx.rotate(-Math.PI / 6);

    ctx.textAlign = 'right';
    ctx.fillText('AC PAY', 20, -70);

    ctx.restore();
  }, []);

  return (
    <>
      <h1 style={{ color: '#fff' }}>Canvas Drawing Text</h1>
      <canvas
        id="c"
        ref={canvasRef}
        style={{
          border: '1px solid #fff',
          background: '#fff',
          width: '100%',
          height: '300px',
        }}
      />
      {/* <button onClick={printC}>Print</button> */}
    </>
  );
};

export default Canvas;
