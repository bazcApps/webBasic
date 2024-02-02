import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "../app/landing/Landing";
import Layout from "../layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route Component={Layout}>
      <Route index Component={Landing} />
    </Route>
  )
);

export { router };
