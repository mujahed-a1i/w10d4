import { createBrowserRouter, RouterProvider } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

const router = createBrowserRouter([
  {
    path: '/', element: 
    <div className="home">
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don&apos;t Touch.</p>
    </div>
  },
  {
    path: '/galleries',
    element: <GalleryNavigation galleries={harvardArt.records}></GalleryNavigation>
  },
  { path: '*', element: <h2>Page Not Found</h2>}
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
