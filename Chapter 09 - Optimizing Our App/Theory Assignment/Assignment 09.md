- ### What is Lazy Loading <br/>
sol:<br/>
1. Lazy loading is a programming technique that delays the loading of non-critical or non-essential resources until they are actually needed.<br/> 
2. In web development, lazy loading is commonly used for images, videos, and other media content to improve website performance.<br/>
3. Lazy loading works by initially only loading the essential resources required for the website or web application to function properly.<br/> 
4. When a user scrolls down the page or interacts with a specific element, the lazy loaded content is then loaded dynamically on demand. <br/>
5. This helps to reduce the initial load time and improve the user experience, particularly for websites with a lot of images or media content.<br/>
6. By using lazy loading, web developers can improve website performance, reduce page load times, and improve user experience. <br/>
7. Additionally, it can help to reduce server load and bandwidth usage by only loading resources when they are needed.<br/>
- ### What is suspense<br/>
sol:<br/>
1. In React, suspense is a feature that allows developers to handle asynchronous rendering of components more easily. <br/>
2. It enables the components to wait for the required data to be loaded before rendering them, thus improving the overall user experience.<br/>
3. Before the release of suspense, developers used to handle asynchronous rendering using techniques like callbacks, promises, or third-party libraries like Redux. <br/>
4. With suspense, React provides a built-in way to handle asynchronous rendering without relying on external libraries.<br/>
5. Suspense works by allowing developers to wrap a component that needs to load data asynchronously in a special <Suspense> component.<br/>
6. The Suspense component tells React to display a fallback UI until the data is loaded. Once the data is ready, the Suspense component will render the wrapped component with the loaded data.<br/>
7. Suspense is particularly useful in scenarios where components need to load large amounts of data or fetch data from slow APIs. <br/>
8. It can help to improve the perceived performance of the application by showing a fallback UI until the data is ready, rather than leaving the user staring at a blank screen.<br/>
9. Overall, suspense is a powerful tool in the React developer's toolkit that can help to simplify asynchronous rendering and improve the user experience of React applications.<br/>
  
  - ### Lazy Loading and SPA <br/>
 sol: <br/>
1. Chunking in React is a technique used to split the application codebase into smaller chunks, which are loaded dynamically as needed. <br/>
2. This is done to improve the initial loading time of the application and overall performance by reducing the amount of code that needs to be loaded upfront.<br/>
3. Chunking does not change the fundamental nature of a single page application (SPA). <br/>
4. A SPA is an application that dynamically loads and renders content in response to user interactions, typically without requiring a full page refresh. <br/>
5. Chunking helps to optimize the performance of a SPA by reducing the amount of code that needs to be loaded upfront, but it does not fundamentally alter the single-page nature of the application.<br/>
6. In fact, chunking is commonly used in single page applications to improve the loading time and overall performance. By splitting the codebase into smaller chunks, the application can be loaded more quickly and the user can start interacting with the application sooner.<br/>
7. So, in short, chunking in React does not change the fact that it is a single page application. Instead, it is a technique used to optimize the performance of a single page application by reducing the initial loading time.<br/>
