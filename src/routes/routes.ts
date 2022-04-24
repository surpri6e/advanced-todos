import About from "../pages/About";
import TodosPage from "../pages/TodosPage";
import NonExistentPage from "../pages/NonExistentPage";
import { IRoute } from "../types/IRoute";
import Login from "../pages/Login";

export const publicRoutes: IRoute[] = [
    {path: '/about', elem: About(), inHeader: 'About'},
    {path: '/log', elem: Login(), inHeader: 'Login'},
    {path: '*', elem: NonExistentPage()},
]    

export const privateRoutes: IRoute[] = [
    {path: '/', elem: TodosPage(), inHeader: 'Main'},
    {path: '/about', elem: About(), inHeader: 'About'},
    {path: '*', elem: NonExistentPage()},
]
