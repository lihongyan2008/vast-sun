export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/home',
              },
              {
                name: 'home',
                icon: 'home',
                path: '/home',
                component: './Home/home',
              },
              {
                name: 'products',
                icon: 'ApartmentOutlined',
                path: '/products',
                component: './Products/products',
              },      
              {
                name: 'about-us',
                icon: 'GlobalOutlined',
                path: '/about-us',
                component: './AboutUs/aboutUs',
              },              
              {
                name: 'cases',
                icon: 'ShareAltOutlined',
                path: '/cases',
                component: './Cases/cases',
              },              
              {
                name: 'News',
                icon: 'RocketOutlined',
                path: '/news',
                component: './Home/home',
              },              
              {
                name: 'Online-Store',
                icon: 'ShoppingCartOutlined',
                path: '/online-store',
                component: './Home/home',
              },
              {
                name: 'contact-Us',
                icon: 'CustomerServiceOutlined',
                path: '/contact-us',
                component: './ContactUs/ContactUs',
              },              
              {
                name: '',
                icon: 'smile',
                path: '/demo',
                component: './demo/home',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: '',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
