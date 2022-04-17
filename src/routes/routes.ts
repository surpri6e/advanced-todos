import About from "../pages/About";
import Main from "../pages/Main";
import NonExistentPage from "../pages/NonExistentPage";
import { IRoute } from "../types/IRoute";

export const routes: IRoute[] = [
    {path: '/', elem: Main(), inHeader: 'Main'},
    {path: '/about', elem: About(), inHeader: 'About'},
    {path: '*', elem: NonExistentPage()},
]        
