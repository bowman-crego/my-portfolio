import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

// import '../styles/tailwind.css';
// Here we import bootstrap to have access to some additional styling
// const router = createBrowserRouter([{
//     path: '/',
//     element: <App />,
//     children: [
//         {
//             index: true,

//         },
//         {
//             path: "/about",
//             element: <AboutMe />
//         }
//     ]

// }]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
