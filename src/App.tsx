import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Layout from "./components/layout/layout.tsx";
import Titlebar from "./components/titlebar";
import Library from "./pages/library/library.tsx";
import StorePage from "./pages/store/store.tsx";
import Products from "./pages/store/product.tsx";
import ContextMenu from "./components/global/contextMenu.tsx";
import ConsoleWriter from "./components/global/console.tsx";
import LoadingScreen from "./pages/loading/loading.tsx";
import { store } from "./util/redux/store.ts";
import Modal from "./components/global/modal.tsx";
import Cart from "./pages/cart/cart.tsx";
import NotFound from "./pages/404/notFound.tsx";
import Login from "./pages/login/login.tsx";
import PurchaseSuccess from "./components/cart/success.tsx";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn] = useState(true);

  if (isLoading) {
    return (
      <div className="container">
        <ConsoleWriter />
        <ContextMenu />
        <Titlebar />
        <LoadingScreen setLoading={setLoading} />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="container">
        <ConsoleWriter />
        <ContextMenu />
        <Titlebar />
        <Login />
      </div>
    );
  }

  return (
    <ReduxProvider store={store}>
      <div className="container">
        <ConsoleWriter />
        <ContextMenu />
        <Titlebar />
        <Layout>
          <BrowserRouter>
            <Modal />
            <Routes>
              <Route path="/" element={<StorePage />} />
              <Route path="/library" element={<Library />} />
              <Route path="/product/:id" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/successed" element={<PurchaseSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </ReduxProvider>
  );
}

export default App;
