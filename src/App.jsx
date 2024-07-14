import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Accordion from "./components/accordion/Accordion";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";
import SearchUI from "./components/search-ui/SearchUI";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Meme />,
        },
      ],
    },
    {
      path: "/accordion",
      element: <Header />,
      children: [
        {
          path: "/accordion",
          element: <Accordion />,
        },
      ],
    },
    {
      path: "/comments",
      element: <Header />,
      children: [
        {
          path: "/comments",
          element: <Comments />,
        },
      ],
    },
    {
      path: "/image-slider",
      element: <Header />,
      children: [
        {
          path: "/image-slider",
          element: <ImageSlider />,
        },
      ],
    },
    {
      path: "/pagination",
      element: <Header />,
      children: [
        {
          path: "/pagination",
          element: <Pagination />,
        },
      ],
    },
    {
      path: "/live-chat",
      element: <Header />,
      children: [
        {
          path: "/live-chat",
          element: <LiveChat />,
        },
      ],
    },
    {
      path: "/search-ui",
      element: <Header />,
      children: [
        {
          path: "/search-ui",
          element: <SearchUI />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
