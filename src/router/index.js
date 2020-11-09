import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('./layout/Layout'),
    props: true,
    children: [
      {
        path: '/',
        name: 'Country list',
        component: () => import('./view/CountryList'),
        props: true
      },
      {
        path: 'code/:country_id',
        name: 'Country view',
        component: () => import('./view/CountryListView'),
        props: ({ query }) => ({ query: query.code })
      }      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router