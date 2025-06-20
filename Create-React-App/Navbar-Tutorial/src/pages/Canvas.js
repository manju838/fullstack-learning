import React, { useRef, useEffect, useState } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null); // Refers to canvas
  const [drawing, setDrawing] = useState(false); // "drawing" state to track if the user is currently drawing on the canvas
  const [lines, setLines] = useState([]); // "lines" state to store lines drawn on the canvas
  const gridSize = 20; // Size of the grid squares on the canvas
  const [isPanning, setIsPanning] = useState(false); // State to track if panning mode is active
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 }); // State to store the current pan offset

  // Function to resize the canvas to match browser window size
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redrawCanvas();  // Redraw the canvas whenever it's resized
  };

  // Clears the canvas and redraws the grid and all the lines
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Apply panning offset
    context.save();
    context.translate(panOffset.x, panOffset.y);

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

    context.restore(); // Restore context to original state without translation
  };

  // Mouse down event to start panning
  const handleMouseDown = (event) => {
    setIsPanning(true); // Enable panning mode
    setPanOffset({ x: event.clientX - panOffset.x, y: event.clientY - panOffset.y });
  };

  // Mouse move event to update the pan offset
  const handleMouseMove = (event) => {
    if (isPanning) {
      const newOffset = {
        x: event.clientX - panOffset.x,
        y: event.clientY - panOffset.y,
      };
      setPanOffset(newOffset);
      redrawCanvas(); // Redraw canvas with updated pan offset
    }
  };

  // Mouse up event to stop panning
  const handleMouseUp = () => {
    setIsPanning(false); // Disable panning mode
  };

  // Setup canvas and resize event listener
  useEffect(() => {
    resizeCanvas(); // Set initial canvas size and draw grid
    window.addEventListener('resize', resizeCanvas); // Handle window resize

    // Attach mouse events for panning
    const canvas = canvasRef.current;
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [panOffset]); // Add panOffset as a dependency to update on pan change

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100vw', // Make canvas width 100% of the viewport width
        height: '100vh', // Make canvas height 100% of the viewport height
        cursor: isPanning ? 'grabbing' : 'default', // Change cursor when panning
      }}
    />
  );
};

export default Canvas;
