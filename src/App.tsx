import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import { FC, lazy, Suspense } from "react";
import Footer from "./componets/footer/Footer";
import Loading from "./componets/loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));


const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
