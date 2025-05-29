import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Glossário from "./pages/Glossário";
import Penicilina from "./pages/Penicilina";
import Extra from "./pages/Extra";
import Quiz from "./pages/Quiz";

const AppRoutes = () => {
    return (
        <BrowserRouter>
          
            <Routes>
                <Route path="/" element={<Home />} />  {/* Alterado para 'index' */}
                <Route path="/extra" element={<Extra />} />
                <Route path="/glossario" element={<Glossário />} />
                <Route path="/penicilina" element={<Penicilina />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;