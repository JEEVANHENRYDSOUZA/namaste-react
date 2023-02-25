- ### What are the different methods of adding images <br/>
sol: <br/>
1. Using assets folder and then importing it.<br/>
2. Using cloud platforms or CDN.<br/>

- ### Client side vs Server Side Routing <br/>
sol: <br/>
## ``` Client Side Routing```
1. Client-side routing is when the routing is handled entirely on the client-side, usually using JavaScript frameworks like React or Angular. When the user clicks on a link, the browser doesn't make a request to the server for a new page, instead, the JavaScript framework changes the URL in the browser and updates the view to show the appropriate content. This means that the application loads faster because there is no need to make a round-trip to the server every time the user clicks on a link. <br/>

## ``` Server Side Routing ```
1. Server-side routing is when the routing is handled by the server. When the user clicks on a link, the browser makes a request to the server for a new page, and the server sends back the appropriate content. This means that the application can be easily crawled by search engines because each page has its unique URL.<br/>

- ### What is SPA (Single Page Application) <br/>
sol: <br/>
1. Single-page applications (SPAs) are web applications that load a single HTML page and dynamically update the content on that page as the user interacts with the application. SPAs use client-side rendering, meaning that the browser loads and renders the HTML, CSS, and JavaScript files necessary for the application to run.<br/>
2. Instead of loading separate HTML pages for each view, SPAs use JavaScript to dynamically render the content of the page, allowing the user to navigate between different views without a full page reload. This provides a faster and more seamless user experience, as the application can update specific parts of the page without needing to reload the entire page.<br/>
3. SPAs often make use of frameworks like React, Angular, or Vue.js, which provide powerful tools for building complex, interactive user interfaces. They also make use of browser APIs like the History API and the Fetch API to manage the state of the application and retrieve data from servers without requiring a page reload.<br/>
4. Using SPAS has some drawbacks as well but the positives overcome the negatives.<br/>

- ### What happens we dont pass an array in ``` useEffect() ``` <br/>
sol: <br/>
1. When we dont pass an array then the  callback passed inside ``` useEffect()``` is rendered on every time the page is re-rendered, which is a very bad User Experience <br/>

- ### What happens when we ``` console.log(useEffect())``` <br/>
sol: <br/>
1. When you call useEffect with an empty dependency array, it returns a function that can be used to clean up the effect when the component unmounts. If you console.log the result of calling useEffect with an empty dependency array, you will see the function that is returned.<br/>
2. The returned function wil look like. <br/>
```
ƒ cleanup() {
  // Clean up the effect
}
 ```

