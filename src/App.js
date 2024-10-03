import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";

// Components
import Planets from "./components/Planets";
import Films from "./components/Films";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="planets" element={<Planets />} />
        <Route path="films" element={<Films />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
