import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import MainLayout from "../layouts/MainLayout";
import Situation from "../pages/Situation";
import Game from "../pages/Game";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children:
        [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/situation",
            element:<Situation/>
          },
          {
            path: "/game",
            element:<Game/>
          }
        ]
    }

  ]
)