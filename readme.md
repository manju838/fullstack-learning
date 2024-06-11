This repo contains code for various projects that are learnt and it also has all the learnings noted.

## 1. 3D Portfolio Project:

Status: In Progress (28:55min/2:53:52)

This is a react portfolio page developed from scratch including threejs usage, done based on 
<www.youtube.com/watch?v=FkowOdMjvYo&t=347s>

### Learnings:
React is a javascript based library for rapid frontend development. Angular is its other alternative tech but react is popular.

Vitejs is used to build react apps faster and its building time is very fast compared to traditional create react app (CRA) method. CRA is the method described when we get started in react, vitejs is another way to build easier. "Next.js 15" is a recent update (on 11/06/2024) that is an alternative to vitejs, more thorough but more advanced to rapidly develop apps.

Tailwind css is used for css styling

### Commands:

=> Install nodejs before starting the project, for windows it is an exe file that should be installed.

#### a) Create a vitejs project
To initialise a vitejs project
```bash
npm create vite@latest ./
npm install
npm run dev 
```
npm run is the command, dev is like a key that points to a certain operation and this is package.json under "scripts" tag. package-lock.json is autocreated and is like the compiled version of package.json.

The directory structure for source code in vite app is:
```bash
src
|__main.jsx <=== Every app has a starting point(entry point) and this is that file
|__App.jsx <=== Code for App is written here and is hooked in main.jsx (render fn.)
|__index.css <=== Tailwindcss code is written here(mainly helper fns for defining general styling)
|__App.css 
```

In main.jsx,

ReactDOM.createRoot(document.getElementById('root')) <=== here we give the id of element in html that we want to connect to, here it's root tag in index.html, so all that we do here is hooked to root tag in index.html
render(<App />) is the place we hook App(written in App.jsx)

Shortcut: To get boilercode in App.jsx, type "rafce" (extension "ES7+ React/Redux/React-Native snippets" should be enabled in vscode). The code inside return in .jsx files is HTML.

To import App.jsx in main.jsx, highlight "App" in the code (after creating App.jsx), and press Ctrl + Space to autoimport in vscode.

#### b) Install and link tailwindcss for styling

To Install tailwindcss with vite
```bash
npm install -D tailwindcss postcss autoprefixer
```
and to Initialise tailwindcss and generates tailwind.config.js and postcss.config.js files
```bash
npx tailwindcss init -p
```
Copy code in tailwind website to Configure your template paths

Create index.css and add code from github, this has tailwind code mainly the helper fns that define the styling for inputs in website and so on, import it in main.jsx
Restart the terminal (```npm run dev```) to get the changes in website

Shortcut: Enable "Tailwind CSS IntelliSense" extension in vscode to see color when hovered over code

#### c) Create a routing system for react application
Routing means moving to a different page when pressed on certain elements.

To Install route library for react
```bash
npm install react-router-dom
```
Import the route related libraries into App.jsx file as this is the main app that is hooked in main.jsx render fn.

BrowserRouter should encompass all the other stuff as it takescare of routing for entire webpage.

To implement Navbar(navigation bar on top of website that has stuff like Aboutus, Products and so on), we need to create components folder under src folder and create Navbar.jsx file in it.

Each of these links redirect to their own pages, so create pages directory in src folder and add jsx files in it for each page. Use ```rafce``` to get jsx boilerplate code.

For linking the jsx pages to website (which is controlled by App.jsx), change ```element={'Home'}``` to ```element={<Home />}```. Now this leads to break in linkage as Home is not defined, so add an index.js file in pages directory and export all the pages using it, and then import it in App.jsx file.

#### d) Add 3D stuff into website
Install React Three fiber, a react library built on top of threejs and links plane threejs which is javascript code with react.
```bash
npm install three @types/three @react-three/fiber
```
This website has 3D content in Home.jsx so import Canvas from @react-three/fiber. This stands as the main DOM(Document Object Model) element and all 3D content is encompassed within this DOM. three refers to native threejs and is a dependency for react-three/fiber and @types/three is an optional package for typescript


#### Note: Shortcuts used here are for windows and working environment is in VSCode.

