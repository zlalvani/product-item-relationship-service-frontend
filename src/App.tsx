import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Router";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
