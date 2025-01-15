import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import '../styles/tailwind.css';
// Here we import bootstrap to have access to some additional styling
const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            

        }
    ]

}]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );


