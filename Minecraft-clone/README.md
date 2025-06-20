# Minecraft-Clone

This tutorial is a minecraft clone using react, threejs and javascript following <www.youtube.com/watch?v=qpOZup_3P_A>.

This tutorial aims to cover the basics of minecraft or game console creation, game control and other functionality inside a webapp. These are useful basics for any visualisation softwares or first person interactions in a webapp.

The Minecraft-clone is the cloned copy of<github.com/danba340/minecraft-freecodecamp/tree/start> which is the boiler plate.

Notes on starting boiler plate:

* Run this folder using npm start (first time users: npm install && npm start)
* src folder has all the functional code
* The public folder in a ReactJS project is used to store static assets that can be accessed directly by the browser. Note that files here are directly accessible using URLs and wont be processed by Webpack bundler(thus no optimisations/hashings possible on these files). ```Environment variables and configuration files``` accessed during runtime are usually stored here.  
* Brief intro to webpack or module bundlers in general is found at <www.youtube.com/watch?v=5IG4UmULyoA> and the next section on program flow explains how the react app program flow is progressed.
* src/images folder contains all the images used inside minecraft i.e grass, dirt, wood etc. ```images.js``` is used to import the asset files into js and export them as objects for further processing. **Refer to the comments in src/images/images.js for more links and resources **```In general, the assets used in the canvas are stored here```



## [Routing in React](https://www.youtube.com/watch?v=SMq1IQRweDc)

**React Router is a standard library for routing in React, enabling navigation between views from different components in a React application, allows the browser URL to be changed, and keep the UI in sync with the URL.**

To install React Router
```bash
npm install - -save react-router-dom
```



## General program flow for react apps:
* Browser accesses the public folder for static assets and gets the index.html file, but since it is public and accessible to the internet, the GUI and website is rendered using "react" and is hidden for security reasons.  
* The body of index.html has a single div tag that is root and this is the key link to link the index.html file to the react based javascript code.  
* Webpack or module bundlers used for the website usually lock onto ```src/index.js``` which contains the corresponding functionality to the html file, unless explicitly specified using a webpack or module bundler's config file and this config file again stays in the public folder.
* This index.js accesses the root div from html file via react's DOM(representation of html file as a dict/hashtable) and links it to App component. In react, each component is expressed as a javascript file so App component has App.js file. 
* React Component is similar to div tags in html, each part of the screen is expressed using div tags and to ensure security, react has seperate components and App component encompasses all theses components into a single component and is then linked to root div in html via index.js file. 

### [Understanding Components and Props in React](https://www.freecodecamp.org/news/react-fundamentals/)

**Components are independent and reusable blocks of code which work in isolation.** They are used to reduce rendundancy. React components **return HTML via a render() function**.

Components in React are either **class components or functional components**.

Nesting components helps in creating a more complex webpage. For example,

**Snippet1:**
```
const Book = () => {
  return (
    <div>
      <h1>Book name : Cracking The Coding Interview</h1>
      <h2>Author : Gayle Laakmann McDowell</h2>
    </div>
  );
};
```
**Snippet2:**
```
const BookList = () => {
  return (
    <div>
      <Book />
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <div>
      <h1>Book name : Cracking The Coding Interview</h1>
      <h2>Author : Gayle Laakmann McDowell</h2>
    </div>
  );
};
```
Snippet1 creates a div tag for a book by creating a **Book component**. Say you need to have multiple instances of Book component, you do it as in Snippet2 by creating 2 components BookList and Book.

**Props stand for properties. Props are like function arguments, and you send them into the component as attributes.**
For example if Book component needs the name and author to be set based on instance, we can do it in one of the following ways:
```
Method1: 

const Book = (props) => {
  return (
    <div>
      <h1>Book name : {props.bookName}</h1>
      <h2>Author : {props.author}</h2>
    </div>
  );
};
=================================================
Method2:

const Book = (props) => {
  const {bookName, author} = props;
  return (
    <div>
      <h1>Book name : {bookName}</h1>
      <h2>Author : {author}</h2>
    </div>
  );
};
=================================================
Method3:

const Book = ({bookName, author}) => {
  return (
    <div>
      <h1>Book name : {bookName}</h1>
      <h2>Author : {author}</h2>
    </div>
  );
};

```

## [React Lifecycles](https://www.freecodecamp.org/news/react-component-lifecycle-methods/)

**In React, components have a lifecycle that consists of different phases, each having a set of lifecycle methods that are called at specific points in the component's lifecycle. These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.**

3 Main phases of a component's lifecycle are:
* Mounting Phase
  * Begins when component is created and inserted into the DOM
  * Many lifecycle methods are called by React to configure, initialise or setup states based on the downstream task
  * 3 Main lifecycle methods are called **in order** during Mounting Phase are:
    * ```constructor()```: Used it to initialize the component's state and bind methods to the component's instance.
    * ```render()```: Responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.
    * 

```javascript
/*
Use of constructor(): Sets the state of "count", binds handleClick()

render(): Displays the current count value and a button. When the button is clicked, the handleClick() is invoked
*/
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
  
* Updating Phase
  * Occurs when component's state or props change.
* Unmounting Phase
  * Occurs when component is removed from the DOM.


## React Navigation

In a React application, navigation can be handled in two primary ways:
1) State-Based Navigation (Without Changing URL Paths): 
  * Applied mainly in single-page applications (SPA)
  * In a state-based navigation scenario,a state variable is set that triggers the rendering of the next page component.

  ```
  const [currentPage, setCurrentPage] = useState('home');

return (
  <div>
    <nav>
      <button onClick={() => setCurrentPage('home')}>Home</button>
      <button onClick={() => setCurrentPage('about')}>About</button>
      <button onClick={() => setCurrentPage('contact')}>Contact</button>
    </nav>
    {currentPage === 'home' && <Home />}
    {currentPage === 'about' && <About />}
    {currentPage === 'contact' && <Contact />}
  </div>
);

  ```
2) Route-Based Navigation (With Changing URL Paths)
  * React Router is commonly used to manage this type of navigation using Route and Link components.
  * In a route-based navigation scenario, "useHistory" from React Router is used to programmatically navigate to the next page.
  ```
  import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

  ```



## [React Hooks](https://www.freecodecamp.org/news/full-guide-to-react-hooks/)


## [Array vs Object Destructuring in JavaScript](https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/)

**The destructuring assignment in JavaScript provides a neat and DRY (Don’t Repeat Yourself) way to extract values from your arrays and objects.**

**Array Destructuring** is a unique technique that allows you to neatly extract an array’s value into new variables.

```javascript
/* Without Array Destruction

This method creates a lot of variables and becomes more messy as variables increase
*/
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const firstName = profile[0];
const lastName = profile[1];
const website = profile[2];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

/* ======================================================================= */
/* With Array Destruction

All the variable definitions are done by javascript and not explicitly "destructured".Here "profile" array is destructured by referencing it.   
*/
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

/* ======================================================================= */
/* Setting Default values in Array Destructuring */
const [firstName = "Tobi", website = "CodeSweetly"] = ["Oluwatobi"];

console.log(firstName); // "Oluwatobi"
console.log(website); // "CodeSweetly"
```

The three dots (...) in the snippet above symbolize the rest operator. The rest operator (...) instructs the computer to put the rest of some specific user-supplied arguments into an array.

```javascript
const [firstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];
```


















## Resources:
1. React Folder Structure Description
    1.1 <blog.webdevsimplified.com/2022-07/react-folder-structure/>
    1.2 <www.youtube.com/watch?v=9VIiLJL0H4Y>

2. Drawing Canvas
<codesandbox.io/s/react-88ysfn?file=/src/catalog/utils/load-obj.js:301-302>

Troubleshooting:
* If there is trouble doing npm install, remove the node_modules folder as well as package_lock.json file before installation. Modify package.json by following <github.com/danba340/minecraft-freecodecamp/pull/2/commits/cfe3de06b111d6fe3b3d9e0cc6049ebcecc6bec9> and update ajv package using
```bash
npm install ajv ajv-keywords --save
```

gradio####################################


## [Arrow Functions](https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/)

The main method used to create a function in JavaScript, is using the ```function``` keyword followed by the function name. 
The arrow function allows you to create a function expression by assigning it to a variable.

```javascript
// Regular JavaScript function
function greetings(name) {
  console.log(`Hello, ${name}!`);
}

greetings('John'); // Hello, John!

// Arrow function version
const greetings = name => {
  console.log(`Hello, ${name}!`);
};

greetings('John'); // Hello, John!

// Arrow function syntax
const myFunction = (param1, param2, ...) => {
  // function body
}

//myFunction is the variable here while the fn can also be called with myFunction()
// "=>" decalres the beginning if the function and {} are used if a multiline function is used and avoided if its a single liner function

```

### Steps to convert Regular function into Arrow function

