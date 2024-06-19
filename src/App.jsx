import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import { ContextProvider } from "./Components/utils/global.context";  // Ajusta la ruta según sea necesario
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        {/* ContextProvider------no se xq aca esta andando siendo que lo habia mandado a main */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.detail} element={<Detail />} />
            <Route path={routes.favs} element={<Favs />} />
            <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
          </Route>
        </Routes>
      </ContextProvider>

    </div>
  );
}

export default App;
