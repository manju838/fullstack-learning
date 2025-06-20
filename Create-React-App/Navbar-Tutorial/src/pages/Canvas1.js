import React, { useRef, useEffect, useState } from 'react';

/*
useRef: A React hook to access DOM element created in the component. In this case, we use it to reference the <canvas> element.

useEffect: Another React hook that lets you perform side effects in your component, such as fetching data, directly interacting with the DOM, or setting up event listeners.

useState: A React hook that allows you to add state to functional components. It lets you store and manage values that may change over time (like drawing and lines in this case).
*/

const Canvas = () => {
  const canvasRef = useRef(null); // Refers to canvas
  const [drawing, setDrawing] = useState(false); // "drawing" is a state tracks whether the user is currently drawing on the canvas, "setDrawing" updates "drawing" state.
  const [lines, setLines] = useState([]); // "lines" state holds an array of lines drawn on the canvas, where each line has a start and end point and "setLines" function updates the lines state.
  const gridSize = 20; // Size of the grid squares on the canvas

  // Function to resize the canvas to match browser window size
  const resizeCanvas = () => {

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redrawCanvas();  // Redraw the canvas whenever it's resized
  };

  useEffect(() => {
    resizeCanvas(); // Initial canvas size set to window size

    window.addEventListener('resize', resizeCanvas);  // Add event listener for window resize
    return () => window.removeEventListener('resize', resizeCanvas);  // Cleanup on component unmount
  }, [lines]);

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setDrawing(true);

    const snapped = snapToGrid(offsetX, offsetY);
    setLines([...lines, { start: snapped, end: snapped }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const newLines = [...lines];
    const snapped = snapToGrid(offsetX, offsetY);
    newLines[newLines.length - 1].end = snapped;

    setLines(newLines);
    redrawCanvas();
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const snapToGrid = (x, y) => {
    const snapX = Math.round(x / gridSize) * gridSize;
    const snapY = Math.round(y / gridSize) * gridSize;
    return { x: snapX, y: snapY };
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current; // ".current" property of a ref object holds the actual DOM element of canvasRef
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height); //erases everything in that area, making it transparent

    // Redraw grid
    for (let x = 0; x < canvas.width; x += gridSize) {
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
    }

    context.strokeStyle = '#e0e0e0';
    context.stroke();

    // Redraw lines
    lines.forEach((line) => {
      context.beginPath();
      context.moveTo(line.start.x, line.start.y);
      context.lineTo(line.end.x, line.end.y);
      context.strokeStyle = 'black';
      context.stroke();
    });
  };

  return (
    <canvas
      width={window.innerWidth}
      height={window.innerHeight}
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ border: '1px solid black', display: 'block' }}
    />
  );
};

export default Canvas;
