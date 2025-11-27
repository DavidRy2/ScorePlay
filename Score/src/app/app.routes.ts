import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { PessoaListagem } from './pages/pessoa-listagem/pessoa-listagem';

export const appRoutes: Routes = [ 

    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'pessoas/login',
        component: Login,
        title: 'Login'

    },
    {
        path: 'pessoas',
        component: PessoaListagem,
        title: 'Listagem de Pessoas cadastro'
    }
];