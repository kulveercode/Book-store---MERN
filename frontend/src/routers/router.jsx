import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/dashboard", element: <h1>dashboard</h1> },
            { path: "/orders", element: <h1>orders</h1> },
            { path: "/cart", element: <h1>cart</h1> },
            { path: "/checkout", element: <h1>checkout</h1> },
        ]
    }
]);

export default router;