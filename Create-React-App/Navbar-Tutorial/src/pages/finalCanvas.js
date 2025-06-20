import React, { useRef, useEffect, useState } from 'react';

/*
useRef: A React hook that allows you to directly access a DOM element created in the component. In this case, we use it to reference the <canvas> element.
useEffect: Another React hook that lets you perform side effects in your component, such as fetching data, directly interacting with the DOM, or setting up event listeners.
useState: A React hook that allows you to add state to functional components. It lets you store and manage values that may change over time (like drawing and lines in this case).
===============================================================================
const Canvas = () => { ... }: This defines the Canvas functional component.

A component is an independent, reusable code block which divides the UI into smaller pieces.React has two types of components: functional and class.

A functional component is basically a JavaScript/ES6 function that returns a React element (JSX).

https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/ 



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

  // Clears the canvas and redraws the grid and all the lines
  const redrawCanvas = () => {
    const canvas = canvasRef.current; // ".current" property of a ref object holds the actual DOM element of canvasRef
    const context = canvas.getContext('2d'); // rendering context object for the canvas element

    context.clearRect(0, 0, canvas.width, canvas.height); // erases everything in that area, making it transparent

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

  // Setup canvas and resize event listener
  useEffect(() => {
    resizeCanvas(); // Set initial canvas size and draw grid
    window.addEventListener('resize', resizeCanvas); // Handle window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Empty dependency array means this runs once on mount


  return(
    <canvas
    width={window.innerWidth}
    height={window.innerHeight}
    ref={canvasRef}

    style={{ border: '1px solid black', display: 'block' }}
    />
  );
};

export default Canvas;