
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"

//import route y routes
//crear Pages e impoortar

function App() {
  return (
      <div className="App">
          <Navbar/>
            <Routes>
              <Route path={routes.home} element={<Home />}/>
              <Route path={routes.contact} element={<Contact />}/>
              <Route path={routes.detail} element={<Detail />}/>  
              <Route path={routes.favs} element={<Favs />}/>
              <Route path="*" element={<h1>Error 404 - Page not found</h1>}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
