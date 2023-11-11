import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: 'root',
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;