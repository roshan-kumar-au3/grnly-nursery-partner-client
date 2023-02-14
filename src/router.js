import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Example from './components/Example';
import Layout from './components/Layout';
import Auth from './components/Auth';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/example",
                element: <Example />,
            },
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
    },
  ]);


  export default router;