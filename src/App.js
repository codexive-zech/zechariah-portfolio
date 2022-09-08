import SharedLayout from "./page/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, Projects } from "./page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
