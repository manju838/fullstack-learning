This repo contains code for various projects that are learnt and it also has all the learnings noted.

# 1. 3D Portfolio Project:

Status: In Progress (20:47min/2:53:52)

This is a react portfolio page developed from scratch including threejs usage, done based on https://www.youtube.com/watch?v=FkowOdMjvYo&t=347s.

Learnings:
React is a javascript based library for rapid frontend development. Angular is its other alternative tech but react is popular.
Vitejs is used to build react apps faster and its building time is very fast compared to traditional create react app (CRA) method. CRA is the method described when we get started in react, vitejs is another way to build easier. "Next.js 15" is a recent update (on 11/06/2024) that is an alternative to vitejs, more thorough but more advanced to rapidly develop apps.
Tailwind css is used for css styling

Commands:

=> Install nodejs before starting the project, for windows it is an exe file that should be installed.

a) Create a vitejs project
npm create vite@latest ./ <=== Initialise a vitejs project
npm install
npm run dev <=== npm run is the command, dev is like a key that points to a certain operation and this is package.json under "scripts" tag. package-lock.json is autocreated and is like the compiled version of package.json.

The directory structure for source code in vite app is:
src
|__main.jsx <=== Every app has a starting point(entry point) and this is that file
|__App.jsx <=== Code for App is written here and is hooked in main.jsx (render fn.)
|__index.css <=== Tailwindcss code is written here(mainly helper fns for defining general styling)
|__App.css 

In main.jsx,
ReactDOM.createRoot(document.getElementById('root')) <=== here we give the id of element in html that we want to connect to, here it's root tag in index.html, so all that we do here is hooked to root tag in index.html
render(<App />) is the place we hook App(written in App.jsx)

Shortcut: To get boilercode in App.jsx, type "rafce" (extension "ES7+ React/Redux/React-Native snippets" should be enabled in vscode)
          To import App.jsx in main.jsx, highlight "App" in the code (after creating App.jsx), and press Ctrl + Space to autoimport in vscode.

b) Install and link tailwindcss for styling

npm install -D tailwindcss postcss autoprefixer <=== Install tailwindcss with vite
npx tailwindcss init -p <=== Initialise tailwindcss and generates tailwind.config.js and postcss.config.js files.
Copy code in tailwind website to Configure your template paths
Create index.css and add code from github, this has tailwind code mainly the helper fns that define the styling for inputs in website and so on, import it in main.jsx
Restart the terminal (npm run dev) to get the changes in website

Shortcut: Enable "Tailwind CSS IntelliSense" extension in vscode to see color when hovered over code

c) Create a routing system for react application
Routing means moving to a different page when pressed on certain elements.
npm install react-router-dom <=== Install route library for react
Import the route related libraries into App.jsx file as this is the main app that is hooked in main.jsx render fn.
BrowserRouter should encompass all the other stuff as it takescare of routing for entire webpage.
To implement Navbar(navigation bar on top of website that has stuff like aboutus, products and so on), we need to create components folder under src folder and create Navbar.jsx file in it.

