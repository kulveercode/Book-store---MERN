import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/dashboard", element: <h1>dashboard</h1> },
            { path: "/orders", element: <h1>orders</h1> },
            { path: "/cart", element: <CartPage /> },
            { path: "/checkout", element: <h1>checkout</h1> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    }
]);

export default router;