import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import { FC, lazy, Suspense } from "react";
import Footer from "./componets/Footer/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCartPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App: FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
