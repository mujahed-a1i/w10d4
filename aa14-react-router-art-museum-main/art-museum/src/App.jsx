import { createBrowserRouter, RouterProvider } from "react-router-dom";
import harvardArt from "./data/harvardArt";

const router = createBrowserRouter([
  { path: '*', element: <h2>Page Not Found</h2>}
]);


function App() {
  console.log(harvardArt);
  return <RouterProvider router={router}/>;
}

export default App;
