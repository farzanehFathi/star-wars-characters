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
import People from "./pages/people/People";
import Planets from "./pages/planets/Planets";
import Films from "./pages/Films";
import NotFound from "./pages/NotFound";

import PeopleDetails, {
  peopleDetailsLoader,
} from "./pages/people/PeopleDetails";
import PlanetDetails, {
  PlanetDetailsLoader,
} from "./pages/planets/PlanetDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="people">
          <Route index element={<People />} />
          <Route
            path=":id"
            element={<PeopleDetails />}
            loader={peopleDetailsLoader}
          />
        </Route>
        <Route path="planets">
          <Route index element={<Planets />} />{" "}
          <Route
            path=":id"
            element={<PlanetDetails />}
            loader={PlanetDetailsLoader}
          />
        </Route>

        <Route path="films" element={<Films />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
