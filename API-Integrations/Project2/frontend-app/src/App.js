import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

/* 
* selectedFile state contains the file uploaded
* handleFileUpload is the mouse upload event that retrives the file from event DOM and sets it to the selectedFile state.
* Now we have the file in our state and then send it to the backend server
*/

function App() {
  
  const [selectedFile, setSelectedFile] = useState(null); // variable to store the file selected
  {/* Write fns to send image to backend server */}
  const serverendpoint = "http://127.0.0.1:8000/upload/";

  const handleFileUpload = (event) => {
    // Event handler that updates the selectedFile state
    setSelectedFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  }

  const handleUploadBtn = (e) => {
    /* Event handler for uploading the file to the backend server. */
    /*
    Theory:
    * The Fetch API is default (in javascript including React apps) for making HTTP requests to web servers. XMLHTTPRequest(XHR) is the previous generation tech to do this.
    ```
    fetch(resource, options)
    ```
    * resource: The URL of the resource you want to fetch.
    * options: An object containing settings for the request (method, headers, body, etc.). 

    ============================================================================
    
    * A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a way to handle asynchronous operations in a more readable and maintainable manner compared to traditional callback-based approaches.
    Promise can be in one of 3 states:
    * Pending: Initial state, openration not complete yet
    * Fulfilled: Operation completed and Promise has a result
    * Rejected: Operation failed and Promise has a reason for the failure (an error)
    
    * Promise constructor (instance of Promise) has two parameters: resolve and reject, which are functions used to transition the Promise from the pending state to either the fulfilled or rejected state. 
    
    * Handling Promises:
    .then, .catch, and .finally are methods used with JavaScript Promises to execute the operations conditionally.
    if the request is complete, failed or always respectively.
    
    ```javascript
    promise.then(onFulfilled, onRejected);

    // onFulfilled is executed if promise is successful and if it fails then onRejected is executed.
    =======================================================
    let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    });
  
    promise
      .then(result => {
        // Handle success
      })
      .catch(error => {
        // Handle failure
      })
      .finally(() => {
        // Always executed
      });
    ``` 
    


.then(onFulfilled, onRejected): Adds fulfillment and rejection handlers.
.catch(onRejected): Adds a rejection handler.
.finally(onFinally): Adds a handler that is called regardless of the promise's outcome.
    ============================================================================

    FormData API is an inbuilt javascript API that lets you compile a set of key/value pairs to send using the Fetch or XMLHttpRequest API
    */
    const formData = new FormData();
    formData.append("file",selectedFile,selectedFile.name);

    const requestOptions = {
      method: "POST",
      body: formData
    };

    // fetch() sends a POST request to "serverendpoint" with the specified request options, first ".then" converts response into json and second ".then" logs response to console
    fetch(serverendpoint, requestOptions).then(
      response => response.json()).then(function(response) {
        console.log(response);
      })
  };




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upload functionality demo
        </p>

        {/* The <form> HTML element represents a document section containing interactive controls for submitting information. 
        
        The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form.
        It forms a box around the elements inside like the border for a page 
        */}
        <form>
          <fieldset>
            <div>
              <input onChange={handleFileUpload} name="image" type="file" accept=".jpg, .jpeg, .png"></input>
            </div>
            <div>
              <button className="button" onClick={handleUploadBtn}>Upload</button>
            </div>
          </fieldset>


        </form>

      </header>
    </div>
  );
}

export default App;
