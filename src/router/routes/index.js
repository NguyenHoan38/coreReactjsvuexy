import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/configurations-adm/organisation/employees',
    component: lazy(() => import('../../views/ConfigurationsADMs/organisation/views/employee/Employees'))
  },
  {
    path: '/configurations-adm/security/roles/create',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/rolePermissions/CreatePermissions'))
  },
  
  {
    path: '/configurations-adm/security/roles/edit',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/rolePermissions/EditPermissions'))
  },
  {
    path: '/configurations-adm/security/roles/detail',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/rolePermissions/DetailPermissions'))
  },
  {
    path: '/configurations-adm/security/roles',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/rolePermissions/RolesPermissions'))
  },
  {
    path: '/configurations-adm/security/authentication',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/Authentication'))
  },
  {
    path: '/configurations-adm/security/maintenance/create',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/maintenance/CreateMaintenance'))
  },
  {
    path: '/configurations-adm/security/maintenance/edit',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/maintenance/EditMaintenance'))
  },
  {
    path: '/configurations-adm/security/maintenance',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/maintenance/Maintenance'))
  },
  {
    path: '/configurations-adm/security/log-files',
    component: lazy(() => import('../../views/ConfigurationsADMs/security/views/LogFiles'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/auth/views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/auth/views/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
