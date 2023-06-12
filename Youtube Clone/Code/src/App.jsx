import { useState } from "react";
import "./App.css";
import Head from "./components/head";
import Body from "./components/body";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/mainContainer";
import Watchpage from "./components/watchpage";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);






function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
