This section follows https://github.com/SuboptimalEng/three-js-tutorials for learning basics of threejs

Basic 3D concepts before staring threejs project:
* [OpenGL, WebGL, Shaders In a NutShell](https://www.youtube.com/watch?v=6AHpdQCrf_Q)
* [GLSL Language Syntax, not needed for threejs project but mightbe useful to write custom shaders](https://www.youtube.com/watch?v=xZM8UJqN1eY)


```bash
# Make sure Node.js V18+ is installed and preferably a higher version based on the application
npm create vite@latest
cd three-setup
npm install
npm run dev # This runs your project
npm install three
```

Add the below line in index.html to add TailwindCSS(CSS framework that allows you to style your elements in App.jsx files using class)
```
<script src="https://cdn.tailwindcss.com"></script>
```

All the code written in threejs is attached to "canvas" tag in App.jsx