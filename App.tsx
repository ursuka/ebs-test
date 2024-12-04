import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./src/componets/navbar/Navbar";
import { FC, lazy, Suspense } from "react";
import Footer from "./src/componets/footer/Footer";
import Loading from "./src/componets/loading/Loading";

const HomePage = lazy(() => import("./src/pages/HomePage"));
const ShoppingCartPage = lazy(() => import("./src/pages/ShoppingCartPage"));
const ErrorPage = lazy(() => import("./src/pages/ErrorPage"));


const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
