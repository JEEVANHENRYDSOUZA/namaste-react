- ### How do you create Nested Router Dom <br/>
sol: <br/>
1. We need to first identify which is the parent component and which component is child. <br/>
2. After identifying the parent and children we need to do two things. <br/>
3. In the parent component path which we give we need to an extra field as children. <br/>
4. This children element will be an array of object, in these array we will put all the children path objects as an element of this array. <br/>
5. In the jsx we will have to use ```<Outlet />  ``` component which will automatically pass all the children, and should be createdin the parent. <br/>
example :

![ac](https://user-images.githubusercontent.com/77383748/221703316-cb522bb7-04fe-423a-b280-1d8cbea3f398.jpg)<br/>
6. The path given to children is relative path.<br/>
- ### ```createHashRouter``` , ```createMapRouter``` <br/>
sol: <br/>
## ``` createHashRouter ```
1. This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. <br/>
2. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".<br/>
## ``` createMemoryRouter ```
1. Instead of using the browsers history a memory router manages it's own history stack in memory.<br/>
2. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.<br/>
- ### Passing props in react <br/>
sol: <br/>
```
class ParentComponent extends React.Component {
  render() {
    const message = "Hello, world!";
    return (
      <ChildComponent message={message} />
    );
  }
}

// Child component
class ChildComponent extends React.Component {
  render() {
    return (
      <div>{this.props.message}</div>//passed in a prop
    );
  }
```
- ### Using constructor , creating multiple states and then using them <br/>
sol: <br/>
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
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
``` 

