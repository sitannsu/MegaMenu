import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/main-layout/layout";
import NotMatch from "../pages/notmatch/not-match";
import HomePage from "../pages/home/home";
import RentPage from "../pages/rent/rent";
import BuyPage from "../pages/buy/buy";
import SellPage from "../pages/sell/sell";
import NewsPage from "../pages/news/news";
import Mortgage from "../pages/mortgage/mortgage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotMatch />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "rent",
        element: <RentPage />,
      },
      {
        path: "buy",
        element: <BuyPage />,
      },
      {
        path: "sell",
        element: <SellPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "mortgage",
        element: <Mortgage />,
      },
    ],
  },
]);

export default Router;
