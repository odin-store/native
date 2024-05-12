import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { store } from "./util/redux/store.ts";
import Layout from "./components/layout/layout.tsx";
import Titlebar from "./components/titlebar";
import Library from "./pages/library/library.tsx";
import StorePage from "./pages/store/store.tsx";
import Products from "./pages/store/product.tsx";
import ContextMenu from "./components/global/contextMenu.tsx";
import ConsoleWriter from "./components/global/console.tsx";
import LoadingScreen from "./pages/loading/loading.tsx";
import Modal from "./components/global/modal.tsx";
import Cart from "./pages/cart/cart.tsx";
import NotFound from "./pages/404/notFound.tsx";
import Login from "./pages/login/login.tsx";
import PurchaseSuccess from "./components/cart/success.tsx";
import {
  selectUser,
  setLogin,
  setProfile,
  setUsername,
} from "./util/redux/reducer/user.reducer.ts";
import { OdinAPI } from "./util/api/odin-api.ts";
import EasterEgg from "./components/global/undertale.tsx";

function App() {
  const [isLoading, setLoading] = useState(true);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const api = new OdinAPI();

  useEffect(() => {
    const prepare = async () => {
      if (user.isLoggedIn) {
        return;
      }

      setLoading(true);

      try {
        const res = await api.get("/auth/authenticate");

        dispatch(setLogin(true));
        dispatch(setUsername(res.data.username));
        dispatch(setProfile(res.data.profile));

        setLoading(false);
      } catch (error) {
        setLoading(false);
        return;
      }
    };

    prepare();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <ConsoleWriter />
        <ContextMenu />
        <Titlebar />
        <LoadingScreen />
      </div>
    );
  }

  if (!user.isLoggedIn) {
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
          <EasterEgg />
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
