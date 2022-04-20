import About from "../pages/About";
import TodosPage from "../pages/TodosPage";
import NonExistentPage from "../pages/NonExistentPage";
import { IRoute } from "../types/IRoute";

export const routes: IRoute[] = [
    {path: '/', elem: TodosPage(), inHeader: 'Main'},
    {path: '/about', elem: About(), inHeader: 'About'},
    {path: '*', elem: NonExistentPage()},
]        
