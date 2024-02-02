import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../app/layout/Layout";
import App from "../app/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route Component={Layout}>
      <Route index Component={App} />
    </Route>
  )
);

export { router };
