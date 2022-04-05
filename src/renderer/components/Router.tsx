import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import Album from '@/pages/Album'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Playlist from '@/pages/Playlist'
import Artist from '@/pages/Artist'
import Search from '@/pages/Search'
import Library from '@/pages/Library'
import Podcast from '@/pages/Podcast'
import Settings from '@/pages/Settings'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/podcast',
    element: <Podcast />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/search/:keywords',
    element: <Search />,
    children: [
      {
        path: ':type',
        element: <Search />,
      },
    ],
  },
  {
    path: '/playlist/:id',
    element: <Playlist />,
  },
  {
    path: '/album/:id',
    element: <Album />,
  },
  {
    path: '/artist/:id',
    element: <Artist />,
  },
]

const Router = () => {
  const element = useRoutes(routes)
  return <>{element}</>
}

export default Router