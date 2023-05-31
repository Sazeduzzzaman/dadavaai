import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/home";
import About from "../page/About/About";


const router= createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path:'/home',
                    element: <Home></Home>
                },
                {
                    path:'/about',
                    element: <About></About>
                },
                
            ]
            
        }
    ]
);

export default router;
