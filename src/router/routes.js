
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/settings', component: () => import('pages/IndexPage.vue'),
        children: [
          { path: 'category', component: () => import('../components/settings/SetCategories.vue') },
          { path: 'brands', component: () => import('../components/settings/SatBrand.vue') },
          { path: 'languages', component: () => import('../components/settings/SetLanguages.vue') },
          { path: 'attribute', component: () => import('../components/settings/SetAttributeGroups.vue') },
          { path: 'attributes', component: () => import('../components/settings/SetAttributesToTheGroup.vue') },
        ]
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
